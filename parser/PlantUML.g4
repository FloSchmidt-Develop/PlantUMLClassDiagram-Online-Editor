grammar PlantUML;

diagram:
    '@startuml'
    (NEWLINE | class_diagram )
    '@enduml'
    ;

class_diagram
    : (class_declaration | connection | package_section | comment_section | NEWLINE)*
    ;


comment_section:
    (NOTE WHITESPACE? direction=comment_direction WHITESPACE? 'of' WHITESPACE? relatedTo=comment_relatedTo WHITESPACE? ':' WHITESPACE? comment_content) 
    | (NOTE WHITESPACE? comment_content WHITESPACE? 'as' name=comment_name)
    | (NOTE WHITESPACE? 'as' name=comment_name NEWLINE multiLine_content NEWLINE 'end note');

comment_content:
    ('"'? (comment_element (WHITESPACE comment_element)* )+ '"'?)
    ;

comment_element:
    (WORD 
    | ('<' WORD '>' )
    | ('</' WORD '>') 
    | (WORD ('?' | ',' | '!' | ':' | '.' ))
    | NOTE
    )
    ;

comment_newLine:
    NEWLINE
    ;

multiLine_content:
    (comment_newLine? (comment_element (WHITESPACE comment_element)* ))*
    ;

comment_direction:
    DIRECTION
    ;

comment_relatedTo:
    WORD
    ;

comment_name:
    WORD
    ;

package_section:
	PACKAGE WHITESPACE? QUOTATION package_name QUOTATION WHITESPACE? ('{'    
	(class_declaration | connection | styling | package_section | comment_section | NEWLINE)*
	'}')?
	;

package_name:
	WORD (DOTDOT WHITESPACE? WORD)?
	;

class_declaration:
    class_type WHITESPACE? class_description WHITESPACE? ('{'
    (attribute | method | declaration | styling |NEWLINE)*
    '}' )?
    ;
	
class_type:
    ABSTRACT CLASS?
    | CLASS
    | INTERFACE
    | OBJECT
    ;

class_description:
    QUOTATION? class_name QUOTATION? (AS class_dataType)?
    ;

class_name:
	WORD DOTDOT WHITESPACE? WORD
	| WORD
    ;

class_dataType:
    WORD
    ;

hide_declaration:
    'hide' ident;

styling: 
	'\'' styling_expression+ '\'' 
	;

styling_expression:
	styling_name=styling_params styling_val=styling_value ';'
	;
	
styling_params:
	WORD ':'
	;

styling_value:
	(FLOAT | INTEGER);

attribute:
    visibility?
    modifiers?
    attribute_name
    ':'
    WHITESPACE?
    attribute_type
    NEWLINE?
    ;

attribute_name:
    WORD+
    | ARRAY
    ;

attribute_type:
    attribute_data_type | ARRAY | ANY | ANYARRAY | nested_argument_type
    ;

function_argument_attribute_type:
    attribute_data_type | ARRAY | ANY | ANYARRAY
    ;


method:
    visibility?
    modifiers?
    mathode_name
    '(' function_argument_list? ')'
    (':' WHITESPACE? methode_data_type)?
    NEWLINE?
    ;

 mathode_name:
    WORD+
    ;

declaration:
    visibility?
    modifiers?
    declaration_name
	WHITESPACE?
    '='
	WHITESPACE?
    declaration_argument
    NEWLINE?
    ;

declaration_name:
    WORD+
    | ARRAY
    ;

declaration_argument:
    WORD* 
	| INTEGER+
	| ('[' WORD (',' WORD)* ']')
	| ('[' INTEGER+ (',' INTEGER)* ']')
    | (WORD (INTEGER+ WORD?))
    ;

multiplicity: ('"*"' | '"0..1"' | '"0..*"' | '"1..*"' | '"' INTEGER '"' );

connection_left:
    instance=connection_name WHITESPACE? (mult=multiplicity)?
    ;

connection_right:
    (mult=multiplicity)? WHITESPACE? instance=connection_name
    ;

connection:
    (connection_points
    NEWLINE)?
    left=connection_left
    connection_symbol
    right=connection_right
    ( WHITESPACE?':' WHITESPACE? stereotype)?
    NEWLINE?
    ;

connection_points:
	'\'{"points": ' point_array '}\'' 
	;

point_array:
    '[' pts=points* ']'
    ;

points:
	'{"x": ' x=INTEGER ', "y": ' y=INTEGER '}' ','?
	;
	
connection_symbol:
	CONNECTOR
	;

visibility:
    ('+'     
    |'-'    
    |'#'
    | '~')    
    ;

function_argument:
    variable_name
    ':'
	WHITESPACE?
    ( function_argument_attribute_type | nested_argument_type)
    ;

nested_argument_type:
    (attribute_data_type | ARRAY | ANY | ANYARRAY) ('.' (attribute_data_type | ARRAY | ANY | ANYARRAY) )+
    ;

function_argument_list:
    function_argument (',' WHITESPACE? function_argument)*
    ;


template_argument:
    type_declaration
    ;

template_argument_list:
    template_argument (',' template_argument)*
    ;

ident:
    '"'? WORD+ '"'? ('as' attribute_type)?
    ;

methode_data_type:
    WORD*
    ;

attribute_data_type:
    WORD*
    ;

data_type:
    WORD*
    ;

variable_name:
    WORD*
    | ( WORD* '.')
    ;
	
connection_name:
	WORD | ('(' WORD ',' WHITESPACE? WORD ')')
	;


modifiers:
    static_mod='{static}'
    | abstract_mod='{abstract}'
    ;

stereotype:
    QUOTATION ( ident ('(' args+=ident? ')')? '/'? )*  (DOTDOT stereotype_value)? QUOTATION
    ;

stereotype_value:
    WORD
    | WORD '.' 
    | (WORD ('.' WORD)+) 
    ;

type_declaration:
    ident '<' template_argument_list? '>'               # template_type
    | ident '[' ']'                                     # list_type
    | ident                                             # simple_type
    ;

item_list:
    (ident NEWLINE)+
    ;

enum_declaration:
    'enum' ident ('{' NEWLINE
    item_list?
    '}' )?
    ;

CONNECTOR:
    '--'
    | '..'
    | '<..'
    | '..>'
    | '-->'
    | '<--'
    | '--*'
    | '*--'
    | '--o'
    | 'o--'
    | '<|--'
    | '--|>'
    | '..|>'
    | '<|..'
    | '*-->'
    | '<--*'
    | 'o-->'
    | '<--o'
    | '-'
    | '.'
    | '->'
    | '<-'
    | '-*'
    | '*-'
    | 'o-'
    | '-o'
    | '<|-'
    | '-|>'
    | '.|>'
    | '<|.'
    | '*->'
    | '<-*'
    | 'o->'
    | '<-o'
	| '*-' DIRECTION? '-'
    | '-' DIRECTION? '-*'
    | '*-' DIRECTION? '-*'
	| '<|-' DIRECTION? '-'
	| '-' DIRECTION? '-|>'
    | '<|-' DIRECTION? '-|>'
    | 'o-' DIRECTION? '-'
    | '-' DIRECTION? '-o'
    | 'o-' DIRECTION? '-o'
    | '<-' DIRECTION? '-'
    | '-' DIRECTION? '->'
    | '<-' DIRECTION? '->'
    | '.' DIRECTION? '.'
    ;
	
DIRECTION:
	'[hidden]'? ('up'
	| 'down'
	| 'right'
	| 'left'
    | 'top'
    | 'bottom'
    | 'r'
    | 'l'
    | 'u'
    | 'd')
	;

NOTE: 'note';
CLASS: 'class';
INTERFACE: 'interface';
ABSTRACT: 'abstract';
OBJECT: 'object';
PACKAGE: 'package';
AS : 'as';


NEWPAGE : 'newpage' -> channel(HIDDEN)
    ;

NEWLINE  :   '\n\n' | '\n' ;


ARRAY : NONDIGIT ( DIGIT | NONDIGIT )* '.'? '[]';
INTEGER: ('-' | '+')? DIGIT (DIGIT)*;
FLOAT: ('-' | '+')? DIGIT+ '.' DIGIT+;
WORD  : (NONDIGIT | DIGIT) ( DIGIT | NONDIGIT )*;
ANYARRAY : '*[]';
ANY   : '*';
DOTDOT  : ':';
SPEZIALS: (',' | '<' | '>' | '?' | '!' | '.');



WHITESPACE  : (' ' | '\t' | '\r' | '\n')+ -> skip ;
QUOTATION : '"';

COMMENT :
    ('/' '/' .*? '\n' | '/*' .*? '*/') -> channel(HIDDEN)
    ;


//=========================================================
// Fragments
//=========================================================
fragment NONDIGIT : [_a-zA-Z];
fragment DIGIT :  [0-9];

fragment LOWERCASE: [a-z];
fragment UPPERCASE: [A-Z];
