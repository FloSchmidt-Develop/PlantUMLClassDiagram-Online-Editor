var antlr4 = require('antlr4');
var PlantUMLListener = require('./PlantUMLListener').PlantUMLListener;
var actual_class = null;
var actual_connection = null;
var actual_attribute = null;
var actual_functionAttribute = null;
var actual_package = null;
var actual_declaration = null;
var actual_note = null;


var DiagramListener = function(res){
    this.Res = res;
    PlantUMLListener.call(this);
    return this;
}

DiagramListener.prototype = Object.create(PlantUMLListener.prototype);
DiagramListener.prototype.constructor = DiagramListener;

// Enter a parse tree produced by PlantUMLParser#diagram.
PlantUMLListener.prototype.enterClass_diagram = function(ctx) {
    console.log(ctx.getText());
    
    this.Res.diagram = {};
    this.Res.diagram.class_declaration = new Array();
    this.Res.diagram.connection_declaration = new Array();
    this.Res.diagram.object_declaration = new Array();
    this.Res.diagram.package_declarations = new Array();
    this.Res.diagram.note_declarations = new Array();
};

// Enter a parse tree produced by PlantUMLParser#comment_section.
PlantUMLListener.prototype.enterComment_section = function(ctx) {
    actual_note = {};
    actual_note.content = '';
    if(ctx.direction != null){
        console.log('direction: ' + ctx.direction.getText()); 
        actual_note.direction = ctx.direction.getText();
    }
    if(ctx.relatedTo != null){
        console.log('relatedTo: ' + ctx.relatedTo.getText()); 
        actual_note.relatedTo = ctx.relatedTo.getText();
    }
    if(ctx.name != null){
        console.log('name: ' + ctx.name.getText()); 
        actual_note.name = ctx.name.getText();
    }


    
};

PlantUMLListener.prototype.enterComment_element = function(ctx) {
    if(actual_note != null){
        if(actual_note.content !== '' && !actual_note.content.endsWith('\n'))
            actual_note.content += ' '
        actual_note.content += ctx.getText();
    }
};

PlantUMLListener.prototype.enterComment_newLine = function(ctx) {
    if(actual_note != null){
        if(actual_note.content !== '')
        actual_note.content += '\n';
    }
};



PlantUMLListener.prototype.enterPackage_section = function(ctx) {

    if(actual_package != null){
        let parentPackage = actual_package;
        actual_package = {};
        actual_package.package = parentPackage;
    }
    else{
        actual_package = {};
    }
};

PlantUMLListener.prototype.exitComment_section = function(ctx) {
    if(actual_package != null){
        actual_note.package = actual_package.name;
    }
    console.log(actual_note);
    
    let clone = JSON.parse(JSON.stringify(actual_note));
    this.Res.diagram.note_declarations.push(clone);
    actual_note = null;
}

PlantUMLListener.prototype.exitPackage_section = function(ctx) {
    let parentPackage;
    if(actual_package.package != null){
        parentPackage = actual_package.package;
        actual_package.package = parentPackage.name;
    }
    let clone = JSON.parse(JSON.stringify(actual_package));
    this.Res.diagram.package_declarations.push(clone);
    actual_package = parentPackage != null ? parentPackage : null;
};

PlantUMLListener.prototype.enterPackage_name = function(ctx) {
    actual_package.name = ctx.getText();
};


// Exit a parse tree produced by PlantUMLParser#diagram.
PlantUMLListener.prototype.exitClass_diagram = function(ctx) {
};

// Enter a parse tree produced by PlantUMLParser#class_declaration.
PlantUMLListener.prototype.enterClass_declaration = function(ctx) {
    actual_class = {};
    actual_class.attributes = new Array();
    actual_class.methodes = new Array();
    actual_class.declarations = new Array();
};

// Exit a parse tree produced by PlantUMLParser#class_declaration.
PlantUMLListener.prototype.exitClass_declaration = function(ctx) {
    
    if(actual_package !== null){
        actual_class.package = actual_package.name;
    }
    let clone = JSON.parse(JSON.stringify(actual_class));
    this.Res.diagram.class_declaration.push(clone);
    actual_class = null;
};

PlantUMLListener.prototype.enterClass_type = function(ctx) {
    actual_class.type = ctx.getText();
};

PlantUMLListener.prototype.enterClass_name = function(ctx) {
    actual_class.name = ctx.getText();
};

PlantUMLListener.prototype.enterClass_dataType = function(ctx) {
    actual_class.alias = ctx.getText();
};

PlantUMLListener.prototype.enterStyling_expression = function(ctx){
    if(actual_class != null)
        actual_class[ctx.styling_name.getText().replace(':','')] = ctx.styling_val.getText();
    else{
        actual_package[ctx.styling_name.getText().replace(':','')] = ctx.styling_val.getText();
    }
}

// Enter a parse tree produced by PlantUMLParser#declaration.
PlantUMLListener.prototype.enterDeclaration = function(ctx) {
    actual_declaration = {};
};

// Exit a parse tree produced by PlantUMLParser#declaration.
PlantUMLListener.prototype.exitDeclaration = function(ctx) {
    let clone = JSON.parse(JSON.stringify(actual_declaration));
    actual_class.declarations.push(clone);
    actual_declaration = null;
};

// Enter a parse tree produced by PlantUMLParser#declaration_name.
PlantUMLListener.prototype.enterDeclaration_name = function(ctx) {
    actual_declaration.name = ctx.getText();
};

// Enter a parse tree produced by PlantUMLParser#declaration_argument.
PlantUMLListener.prototype.enterDeclaration_argument = function(ctx) {
    actual_declaration.attribute = ctx.getText();
};

PlantUMLListener.prototype.enterAttribute = function(ctx) {
    actual_attribute = {};
};

PlantUMLListener.prototype.exitAttribute = function(ctx) {
    let clone = JSON.parse(JSON.stringify(actual_attribute));
    actual_class.attributes.push(clone);
    actual_attribute = null;
};

PlantUMLListener.prototype.enterAttribute_name = function(ctx) {
    actual_attribute.name = ctx.getText();
};

PlantUMLListener.prototype.enterAttribute_type = function(ctx) {
    actual_attribute.dataType = ctx.getText();
};

PlantUMLListener.prototype.enterVisibility = function(ctx) {
    actual_attribute.visibility = ctx.getText();
};

// Enter a parse tree produced by PlantUMLParser#modifiers.
PlantUMLListener.prototype.enterModifiers = function(ctx) {
    actual_attribute.modifiers = ctx.getText();
};

PlantUMLListener.prototype.enterMethod = function(ctx) {
    actual_attribute = null;
    actual_attribute = {};
    actual_attribute.attributeList = new Array();
};

PlantUMLListener.prototype.exitMethod = function(ctx) {
    let clone = JSON.parse(JSON.stringify(actual_attribute));
    actual_class.methodes.push(clone);
};

PlantUMLListener.prototype.enterMathode_name = function(ctx) {
    actual_attribute.name = ctx.getText();
};

PlantUMLListener.prototype.enterFunction_argument = function(ctx) {
    actual_functionAttribute = null;
    actual_functionAttribute = {};
};

PlantUMLListener.prototype.exitFunction_argument = function(ctx) {
    let clone = JSON.parse(JSON.stringify(actual_functionAttribute));
    actual_attribute.attributeList.push(actual_functionAttribute)
};

PlantUMLListener.prototype.enterVariable_name = function(ctx) {
    actual_functionAttribute.name = ctx.getText();
};

PlantUMLListener.prototype.enterNested_argument_type = function(ctx) {
    console.log('=======nested Type=======');
    console.log(ctx.getText());
    console.log('actual Attribute');
    console.log(actual_functionAttribute);
    console.log('===========================');
    
    
    
    actual_functionAttribute.dataType = ctx.getText();
};

PlantUMLListener.prototype.enterFunction_argument_attribute_type = function(ctx) {
    console.log('=======not nested Type========');
    console.log(ctx.getText());
    console.log('actual Attribute');
    console.log(actual_functionAttribute);
    console.log('===========================');
    

    actual_functionAttribute.dataType = ctx.getText();
};

PlantUMLListener.prototype.enterMethode_data_type = function(ctx) {
    actual_attribute.dataType = ctx.getText();
    actual_attribute.test = actual_attribute.name;
};

// Enter a parse tree produced by PlantUMLParser#connection.
PlantUMLListener.prototype.enterConnection = function(ctx) {
    actual_connection = {};
};

PlantUMLListener.prototype.enterPoint_array = function(ctx) {
    let points = ctx.getText();
    if(actual_connection != null){
        actual_connection.points = JSON.parse(points);
    }
};

// Exit a parse tree produced by PlantUMLParser#connection.
PlantUMLListener.prototype.exitConnection = function(ctx) {
    let clone = JSON.parse(JSON.stringify(actual_connection));
    this.Res.diagram.connection_declaration.push(clone);
    actual_connection = null;
};

PlantUMLListener.prototype.enterConnection_left = function(ctx) {
    actual_connection.left = ctx.instance.getText();
    actual_connection.multiplicity_left = ctx.mult ? ctx.mult.getText() : 'none';
};

// Enter a parse tree produced by PlantUMLParser#connection_right.
PlantUMLListener.prototype.enterConnection_right = function(ctx) {
    if(ctx.instance !== null)
        actual_connection.right = ctx.instance.getText();
    else
        actual_connection.right = 'missing'
    actual_connection.multiplicity_right = ctx.mult ? ctx.mult.getText() : 'none';
};

// Enter a parse tree produced by PlantUMLParser#connection_symbol.
PlantUMLListener.prototype.enterConnection_symbol = function(ctx) {
    actual_connection.connector = ctx.getText();
};

// Enter a parse tree produced by PlantUMLParser#stereotype.
PlantUMLListener.prototype.enterStereotype = function(ctx) {
    actual_connection.stereotype = ctx.getText().replace('\"','').replace('\"','');
    
};


exports.DiagramListener = DiagramListener;