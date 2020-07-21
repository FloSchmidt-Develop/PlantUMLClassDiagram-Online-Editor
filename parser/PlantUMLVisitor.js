// Generated from PlantUML.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by PlantUMLParser.

function PlantUMLVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

PlantUMLVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
PlantUMLVisitor.prototype.constructor = PlantUMLVisitor;

// Visit a parse tree produced by PlantUMLParser#diagram.
PlantUMLVisitor.prototype.visitDiagram = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlantUMLParser#class_diagram.
PlantUMLVisitor.prototype.visitClass_diagram = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlantUMLParser#package_section.
PlantUMLVisitor.prototype.visitPackage_section = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlantUMLParser#package_name.
PlantUMLVisitor.prototype.visitPackage_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlantUMLParser#class_declaration.
PlantUMLVisitor.prototype.visitClass_declaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlantUMLParser#class_type.
PlantUMLVisitor.prototype.visitClass_type = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlantUMLParser#class_description.
PlantUMLVisitor.prototype.visitClass_description = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlantUMLParser#class_name.
PlantUMLVisitor.prototype.visitClass_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlantUMLParser#class_dataType.
PlantUMLVisitor.prototype.visitClass_dataType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlantUMLParser#hide_declaration.
PlantUMLVisitor.prototype.visitHide_declaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlantUMLParser#styling.
PlantUMLVisitor.prototype.visitStyling = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlantUMLParser#styling_expression.
PlantUMLVisitor.prototype.visitStyling_expression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlantUMLParser#styling_params.
PlantUMLVisitor.prototype.visitStyling_params = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlantUMLParser#styling_value.
PlantUMLVisitor.prototype.visitStyling_value = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlantUMLParser#attribute.
PlantUMLVisitor.prototype.visitAttribute = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlantUMLParser#attribute_name.
PlantUMLVisitor.prototype.visitAttribute_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlantUMLParser#attribute_type.
PlantUMLVisitor.prototype.visitAttribute_type = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlantUMLParser#function_argument_attribute_type.
PlantUMLVisitor.prototype.visitFunction_argument_attribute_type = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlantUMLParser#method.
PlantUMLVisitor.prototype.visitMethod = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlantUMLParser#mathode_name.
PlantUMLVisitor.prototype.visitMathode_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlantUMLParser#declaration.
PlantUMLVisitor.prototype.visitDeclaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlantUMLParser#declaration_name.
PlantUMLVisitor.prototype.visitDeclaration_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlantUMLParser#declaration_argument.
PlantUMLVisitor.prototype.visitDeclaration_argument = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlantUMLParser#multiplicity.
PlantUMLVisitor.prototype.visitMultiplicity = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlantUMLParser#connection_left.
PlantUMLVisitor.prototype.visitConnection_left = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlantUMLParser#connection_right.
PlantUMLVisitor.prototype.visitConnection_right = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlantUMLParser#connection.
PlantUMLVisitor.prototype.visitConnection = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlantUMLParser#connection_points.
PlantUMLVisitor.prototype.visitConnection_points = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlantUMLParser#point_array.
PlantUMLVisitor.prototype.visitPoint_array = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlantUMLParser#points.
PlantUMLVisitor.prototype.visitPoints = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlantUMLParser#connection_symbol.
PlantUMLVisitor.prototype.visitConnection_symbol = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlantUMLParser#visibility.
PlantUMLVisitor.prototype.visitVisibility = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlantUMLParser#function_argument.
PlantUMLVisitor.prototype.visitFunction_argument = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlantUMLParser#nested_argument_type.
PlantUMLVisitor.prototype.visitNested_argument_type = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlantUMLParser#function_argument_list.
PlantUMLVisitor.prototype.visitFunction_argument_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlantUMLParser#template_argument.
PlantUMLVisitor.prototype.visitTemplate_argument = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlantUMLParser#template_argument_list.
PlantUMLVisitor.prototype.visitTemplate_argument_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlantUMLParser#ident.
PlantUMLVisitor.prototype.visitIdent = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlantUMLParser#methode_data_type.
PlantUMLVisitor.prototype.visitMethode_data_type = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlantUMLParser#attribute_data_type.
PlantUMLVisitor.prototype.visitAttribute_data_type = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlantUMLParser#data_type.
PlantUMLVisitor.prototype.visitData_type = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlantUMLParser#variable_name.
PlantUMLVisitor.prototype.visitVariable_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlantUMLParser#connection_name.
PlantUMLVisitor.prototype.visitConnection_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlantUMLParser#modifiers.
PlantUMLVisitor.prototype.visitModifiers = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlantUMLParser#stereotype.
PlantUMLVisitor.prototype.visitStereotype = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlantUMLParser#template_type.
PlantUMLVisitor.prototype.visitTemplate_type = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlantUMLParser#list_type.
PlantUMLVisitor.prototype.visitList_type = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlantUMLParser#simple_type.
PlantUMLVisitor.prototype.visitSimple_type = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlantUMLParser#item_list.
PlantUMLVisitor.prototype.visitItem_list = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PlantUMLParser#enum_declaration.
PlantUMLVisitor.prototype.visitEnum_declaration = function(ctx) {
  return this.visitChildren(ctx);
};



exports.PlantUMLVisitor = PlantUMLVisitor;