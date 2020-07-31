const antlr4 = require('./node_modules/antlr4')
var PlantUMLLexer = require('./parser/PlantUMLLexer').PlantUMLLexer;
var PlantUMLParser = require('./parser/PlantUMLParser').PlantUMLParser;
var DiagramListener = require('./parser/DiagramListener').DiagramListener;

const express = require('./node_modules/express');
const fileUpload = require('./node_modules/express-fileupload');
var plantuml = require('node-plantuml');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
var response = {};
var requestBody = {};
var addedClasses;
var addedConnections;
//const bodyParser = require('body-parser');

const app = express();
app.use(express.json());

app.use(fileUpload());
app.use(cors());
plantuml.useNailgun(); 

app.post('/upload', (req, res) => {
    if(req.file === null){
        return res.status(400).json({msg: 'no file uploaded'})
    }
    //console.log(req);

    const file = req.files.file;
    console.log(file.data);
    var input = file.data.toString('utf8');

    var chars = new antlr4.InputStream(input);
    var lexer = new PlantUMLLexer(chars);
    var tokens  = new antlr4.CommonTokenStream(lexer);
    var parser = new PlantUMLParser(tokens);
    parser.buildParseTrees = true;
    var tree = parser.diagram();


    var o = {};

    var listener = new DiagramListener(o);
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener,tree);
    
    console.log(listener.Res.diagram);
    //console.log(tree);
    

    res.json(listener);
})

app.post('/export', (req, res) => {
    requestBody = req.body;
    var result = createPUMLFile(req.body);


    res.setHeader('Content-disposition', 'attachment; filename=theDocument.puml');
    res.setHeader('Content-type', 'text/plain');
    res.charset = 'UTF-8';
    res.write(result);
    res.end();

})

app.post('/png', function(req, res) {
    res.set('Content-Type', 'image/png');
   
    requestBody = req.body;
    var result = createPUMLFile(req.body);
    

    var decode = plantuml.decode('/temp.puml');
    var gen = plantuml.generate({format: 'png'});
   
    decode.out.pipe(gen.in);
    gen.out.pipe(res);
  });


app.listen(4000, () => console.log('Server Started'));



function createPUMLFile(requestData ){
    response = requestData;
    addedClasses = [];
    addedConnections = [];
    
    var result = '';
    result += '@startuml';
    result += '\n \n';
    result += createClasses(requestData.class_declarations.filter(e => e.package === ''), requestData. connection_declarations);
    result += addPackages(requestData.package_declarations.filter(e => e.package === ''), requestData.connection_declarations);
    result += '@enduml';

    return result;

}

function addPackages(packages, connections){
    
    var result = '';
    for (let index = 0; index < packages.length; index++) {
        const pack = packages[index];
        result += 'package "' + pack.name + '" {\n'
        result += getStylingOfClass(pack) + '\n';
        classes = pack.classReferences;
        result += createClasses(classes, connections);
        let Childpackages = pack.packageReferences;
        result += addPackages(Childpackages,connections);
        result += '} \n \n'
    }
    return result;
}

function createClasses(classes, connections){
    var result = '';
    for (let index = 0; index < classes.length; index++) {
        const cls = classes[index];
        result += cls.type + ' "' + (cls.type === 'object' ? cls.name + ': ' + cls.dataType : cls.name) + '" as ' + cls.alias + '{ \n';
        result += getStylingOfClass(cls);
        result += getAttributesOfClass(cls);
        result += getMethodsOfClass(cls);
        result += getDeclarationsOfObject(cls);
        result += '}\n \n';
        addedClasses.push(cls.name);

        
        let connectionsOfClass = connections.filter(e => e.sourceElement === cls.name || e.destinationElement === cls.name);
        connectionsOfClass.forEach(connection => {
            if(addedClasses.find(srcCls => srcCls === connection.sourceElement) && addedClasses.find(dstCls => dstCls === connection.destinationElement)){
                result += createConnections(connection);
            }
        });

        connectionsOfClass.filter(e => e.destinationElement.includes('(')).forEach(connection => {
            if(addedConnections.find(dstConnection => connection.destinationElement === dstConnection)){
                result += createConnections(connection);
            }
        })
        
        



    }
    return result;
}

function getStylingOfClass(cls){
    result = ''
    result += '\t\'' + 'width:' + cls.width + ';hight:' + cls.hight + ';x:' + cls.x + ';y:' + cls.y + ';\'\n';
    return result;
}

function createConnections(connections){
    var result = '';
    const connection = connections;
    
    
    result += '\'{"points": [' + getConnectionPoints(connection.points) + ']}\'\n';
    result += connection.destinationElement
    result += ' '
    + (connection.multiplicity_left.value !== '' ? ('"' + (connection.multiplicity_left.value) + '"'): '')
    + getConnection(connection.connector,connection.destinationElement, connection.sourceElement)
    + (connection.multiplicity_right.value !== '' ? ( '"' + connection.multiplicity_right.value + '"') : '') 
    + ' ' + connection.sourceElement
    + (connection.stereoType !== '' ? (' : "' + connection.stereoType + '"') :  '');
    result += '\n';

    result += '\n';
    addedConnections.push('(' + connection.destinationElement + ',' + connection.sourceElement + ')');
    return result;
}

function getConnectionPoints(points){
    var result = '';
    if(points != null ){
        for (let index = 0; index < points.length; index++) {
            var point = points[index];
            if(index < points.length - 1)  
                result += '{"x": ' + point.x + ', "y": ' + point.y + '},';
            else
                result += '{"x": ' + point.x + ', "y": ' + point.y + '}';
            
        }
    } 
    return result;
}

function getConnection(connector,destination,sourceElement){
    result = '';
    let destinationClass = requestBody.class_declarations.find(e => e.name === destination);
    let sourceClass = requestBody.class_declarations.find(e => e.name === sourceElement);

    switch(connector.endArrowSymbol){
        case 0: 
            result += '<';
            break;
        case 1:
            result += 'o';
            break;
        case 2:
            result += '*';
            break;
        case 3:
            result += '<|';
            break;
        case 4:
            result += '';
            break;
        default:
            break;
    }
    result += connector.lineStyle === 0 ? ('-' + getLayoutInfo(destinationClass,sourceClass) + '-') : ('.' + getLayoutInfo(destinationClass,sourceClass) + '.');
    switch(connector.startArrowSymbol){
        case 0: 
            result += '>';
            break;
        case 1:
            result += 'o';
            break;
        case 2:
            result += '*';
            break;
        case 3:
            result += '|>';
            break;
        case 4:
            result += '';
            break;
        default:
            break;
    }
    return result;
}

function getLayoutInfo(destinationClass,sourceClass){
    result = '';
    delta = 100;
    if(destinationClass){
        if(parseInt(sourceClass.x) - (destinationClass.x) >= 0){
            result = 'left';
        }
        else{
            result = 'right';
        }
    
        if( Math.abs(parseInt(sourceClass.y) - parseInt(destinationClass.y)) >= delta && parseInt(sourceClass.y) - parseInt(destinationClass.y) >= 0) {
            result = 'up';
        }
        else if(Math.abs(parseInt(sourceClass.y) - parseInt(destinationClass.y)) >= delta && parseInt(sourceClass.y) - parseInt(destinationClass.y) < 0){
            result = 'down';
        }
    }

    return result;
}

function getAttributesOfClass(cls){
    var result = ''
    var attrs = cls.attributes;
    for (let index = 0; index < attrs.length; index++) {
        const attr = attrs[index];
        result += '\t';
        result += getVisibility(attr.visibility) + getModifier(attr.modifiers) + attr.name + ': ' + attr.dataType + '\n';
    }
    return result;
}


function getVisibility(visibility){
    switch(visibility){
        case 0:
            return '-';
        case 1:
            return '#';
        case 2:
            return '~';
        case 3:
            return '+';
        default:
            return ''
    }
}

function getModifier(modifier){
    switch(modifier){
        case 0:
            return '{static}';
        case 1:
            return '{abstract}';
        case 2:
            return '';
        default:
            return '';
    }
}

function getMethodsOfClass(cls){
    var result = ''
    var mets = cls.methods;
    for (let index = 0; index < mets.length; index++) {
        const met = mets[index];
        result += '\t';
        result += getVisibility(met.visibility) + getModifier(met.modifiers) + met.name + '(' + getFunctionArguments(met) + '): ' + met.dataType + '\n';
    }

    return result;
}

function getFunctionArguments(method){
    result = '';
    var attrs = method.attributeList;
    for (let index = 0; index < attrs.length; index++) {
        const attr = attrs[index];
        result += (index === 0 ? '' : ', ') + attr.name + ': ' + attr.dataType;
    }
    return result;
}

function getDeclarationsOfObject(cls){
    var result = ''
    var decls = cls.declarations;
    for (let index = 0; index < decls.length; index++) {
        const decl = decls[index];
        result += '\t';
        result += decl.name + '= ' + decl.declaration_value + '\n';
    }
    return result;
}

