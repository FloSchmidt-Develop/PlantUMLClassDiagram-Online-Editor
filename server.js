const antlr4 = require('./node_modules/antlr4')
var PlantUMLLexer = require('./parser/PlantUMLLexer').PlantUMLLexer;
var PlantUMLParser = require('./parser/PlantUMLParser').PlantUMLParser;
var DiagramListener = require('./parser/DiagramListener').DiagramListener;

const express = require('./node_modules/express');
const fileUpload = require('./node_modules/express-fileupload');
var plantumlEncoder = require('plantuml-encoder');
const cors = require('cors');
var response = {};
var requestBody = {};
var addedClasses;
var addedConnections;
var addedNotes;
//const bodyParser = require('body-parser');

const app = express();
app.use(express.json({limit: '10mb'}));

app.use(fileUpload());
app.use(cors());

app.post('/upload', (req, res) => {
    if(req.file === null){
        return res.status(400).json({msg: 'no file uploaded'})
    }

    const file = req.files.file;
    //console.log(file.mimetype);
    if(file.mimetype === "application/json")
    {

        var input = file.data.toString('utf8');
        let obj = JSON.parse(input);
        let result = createJSONFile(obj);
        //console.log(result);
        
        res.json(result);
    }
    else
    {
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
        
        //console.log(listener.Res.diagram);
    
        res.json(listener);
    }

})

app.post('/export', (req, res) => {
    requestBody = req.body;

    let result = createPUMLFile(req.body);


    res.setHeader('Content-disposition', 'attachment; filename=theDocument.puml');
    res.setHeader('Content-type', 'text/plain');
    res.charset = 'UTF-8';
    res.write(result);
    res.end();

})

app.post('/png', (req, res) => {
    requestBody = req.body;
    let result = createPUMLFile(req.body);

    res.setHeader('Content-disposition', 'attachment; filename=theDocument.puml');
    res.setHeader('Content-type', 'text/plain');
    res.charset = 'UTF-8';
   
    var encoded = plantumlEncoder.encode(result)
 
    var url = 'http://www.plantuml.com/plantuml/img/' + encoded
    res.write(url);
    res.end();
  });


app.listen(4000, () => console.log('Server Started'));

function createJSONFile(requestObject){
    resultObj = {Res: {}};
    resultObj.Res = { diagram: {
        class_declaration: [],
        connection_declaration: [],
        object_declaration: [],
        package_declarations: []
     }};
    let diagram = resultObj.Res.diagram;
    //console.log(requestObject);
    
    diagram.class_declaration = requestObject.class_declarations.map(cls => ({
        alias: cls.alias,
        hight: cls.hight,
        name: (cls.dataType == '' ? cls.name : ( cls.name + ':' + cls.dataType)),
        type: cls.type,
        width: cls.width,
        x: cls.x,
        y: cls.y,
        package: cls.package,
        //attributes
        attributes: cls.attributes.map(attr => ({
            visibility: attr.visibility === 0 ? '-' : 
                (attr.visibility === 1 ? '#' : 
                (attr.visibility === 2 ? '~' : 
                (attr.visibility === 3 ? '+' 
                : ''))),
            modifiers: attr.modifiers === 0 ? '{abstract}' :
             (attr.modifiers === 1 ? '{static}' : ''),
            name: attr.name,
            dataType: attr.dataType
        })),
        //methods
        methodes: cls.methods.map(mth => ({
            visibility: mth.visibility === 0 ? '-' : 
                (mth.visibility === 1 ? '#' : 
                (mth.visibility === 2 ? '~' : 
                (mth.visibility === 3 ? '+' 
                : ''))),
            modifiers: mth.modifiers === 0 ? '{abstract}' :
             (mth.modifiers === 1 ? '{static}' : ''),
            name: mth.name,
            dataType: mth.dataType,
            attributeList: mth.attributeList.map(attr => ({name: attr.name, dataType: attr.dataType})),
        })),
        declarations: cls.declarations.map(dec => ({
            name: dec.name,
            attribute: dec.declaration_value
        })),

    }))

    //--Connections
    diagram.connection_declaration = requestObject.connection_declarations.map(con => ({
        type: con.type,
        stereoType: con.stereoType,
        right: con.sourceElement,
        left: con.destinationElement,
        multiplicity_left: con.multiplicity_left.value,
        multiplicity_right: con.multiplicity_right.value,
        connector: (con.connector.endArrowSymbol === 0 ? '<' : 
            (con.connector.endArrowSymbol === 1 ? 'o' :
            (con.connector.endArrowSymbol === 2 ? '*' :
            (con.connector.endArrowSymbol === 3 ? '<|' :
            con.connector.endArrowSymbol === 4 ? '' : ''))) )
            +
            (con.connector.lineStyle === 0 ? '-' : '.')
            +
            (con.connector.lineStyle === 0 ? '-' : '.')
            +
            (con.connector.startArrowSymbol === 0 ? '>' : 
            (con.connector.startArrowSymbol === 1 ? 'o' :
            (con.connector.startArrowSymbol === 2 ? '*' :
            (con.connector.startArrowSymbol === 3 ? '|>' :
            con.connector.startArrowSymbol === 4 ? '' : ''))) ),
        points: con.points,
    }))
    //Packages
    diagram.package_declarations = requestObject.package_declarations.map(pkg => ({
        package: pkg.package,
        hight: pkg.hight,
        width: pkg.width,
        x: pkg.x,
        y: pkg.y,
        name: pkg.name
    }))

    return resultObj;
}

function createPUMLFile(requestData ){
    response = requestData;
    addedClasses = [];
    addedConnections = [];
    addedNotes = [];
    
    var result = '';
    result += '@startuml';
    result += '\n \n';
    result += createClasses(requestData.class_declarations.filter(e => e.package === ''), requestData.connection_declarations);
    result += createNotes(requestData.note_declarations.filter(e => e.package === ''), requestData.connection_declarations);
    result += addPackages(requestData.package_declarations.filter(e => e.package === ''), requestData.connection_declarations);
    requestData.connection_declarations.filter(e => e.destinationElement.includes('(')).forEach(connection => {
        if(addedConnections.find(dstConnection => connection.destinationElement === dstConnection)){
            result += createConnections(connection);
        }
    })
    result += '@enduml';

    return result;

}

function addPackages(packages, connections){
    
    var result = '';
    for (let index = 0; index < packages.length; index++) {
        const pack = packages[index];
        result += 'package "' + pack.name + '" {\n'
        result += getStylingOfClass(pack) + '\n';
        let classes = pack.classReferences;
        result += createClasses(classes, connections);
        let notes = pack.noteReferences;
        result += createNotes(notes,connections);
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
        result += cls.type + ' "' + (cls.type === 'object' && cls.dataType !== '' ? cls.name + ': ' + cls.dataType : cls.name) + '" as ' + cls.alias + '{ \n';
        result += getStylingOfClass(cls);
        result += getAttributesOfClass(cls);
        result += getMethodsOfClass(cls);
        result += getDeclarationsOfObject(cls);
        result += '}\n \n';
        addedClasses.push(cls.alias);

        
        let connectionsOfClass = connections.filter(e => e.sourceElement === cls.alias || e.destinationElement === cls.alias);
        connectionsOfClass.forEach(connection => {
            if(addedClasses.find(srcCls => srcCls === connection.sourceElement) && addedClasses.find(dstCls => dstCls === connection.destinationElement)){
                result += createConnections(connection);
            }
        });


    }

    return result;
}


function createNotes(notes, connections){
    var result = '';
    for (let index = 0; index < notes.length; index++) {
        const note = notes[index];
        result += 'note' + ' as ' + note.name + '\n';
        result += note.content;
        result += '\n';
        result += 'end note \n\n';
        addedClasses.push(note.name);

        
        let connectionsOfClass = connections.filter(e => e.sourceElement === note.name || e.destinationElement === note.name);
        connectionsOfClass.forEach(connection => {

            
            if(addedClasses.find(srcCls => srcCls === connection.sourceElement) && addedClasses.find(dstCls => dstCls === connection.destinationElement)){
        
                result += createConnections(connection);
            }

        });
        
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
    + (connection.multiplicity_right.value !== '' ? ('"' + (connection.multiplicity_right.value) + '"'): '')
    + getConnection(connection.connector,connection.destinationElement, connection.sourceElement)
    + (connection.multiplicity_left.value !== '' ? ( '"' + connection.multiplicity_left.value + '"') : '') 
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
    if(destinationClass == null)
        destinationClass = requestBody.note_declarations.find(e => e.name === destination);
    if(sourceClass == null)
        sourceClass = requestBody.note_declarations.find(e => e.name === sourceElement);

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
    result += connector.lineStyle === 0 ? ('-' + getLayoutInfo(connector) + '-') : ('.' + getLayoutInfo(connector) + '.');
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

function getLayoutInfo(connector){
    //console.log(connector);
    
    let result = ''
    if(connector.layoutProperty === 0){
        result = 'up'; //l
    }
    else if(connector.layoutProperty === 1){
        result = 'down'; //r
    }
    else if(connector.layoutProperty === 2){
        result = 'left'; //r
    }
    else if(connector.layoutProperty === 3){
        result = 'right'; //r
    }

    return result;
}

function getAttributesOfClass(cls){
    var result = ''
    var attrs = cls.attributes;
    for (let index = 0; index < attrs.length; index++) {
        const attr = attrs[index];

        result += '\t';
        result += getVisibility(attr.visibility) 
        + getModifier(attr.modifiers) 
        + attr.name 
        + (attr.dataType === '' ? '' : (':' + attr.dataType ))
        + (attr.defaultValue === '' ? '' : (' = ' + attr.defaultValue))
        + '\n';
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

