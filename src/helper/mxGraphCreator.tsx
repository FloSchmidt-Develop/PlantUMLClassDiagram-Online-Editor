
import IDiagram from '../interfaces/diagram';
import IClass from '../interfaces/class';



import Class from '../classes/parserRep/class'
import Attribute from '../classes/parserRep/attribute';
import Method from '../classes/parserRep/method';
import Connection from '../classes/parserRep/connection';
import Diagram from '../classes/parserRep/diagram';
import { start } from 'repl';


import {
    mxGraph,
    mxRubberband,
    mxKeyHandler,
    mxClient,
    mxUtils,
    mxEvent
  } from "mxgraph-js";

export default class MxGraphCreator{

    graph : any;
    parentContainer: any;
    diagram: IDiagram;

    constructor(graph : any, diagram: IDiagram ){
        this.graph = graph;

        graph.setHtmlLabels(true);

        this.parentContainer = graph.getDefaultParent();
        this.diagram = diagram;

        this.graph.getLabel = function(cell){

            var actual_class : IClass = cell.value;
            if(actual_class !== null && (actual_class.type === 'interface' || actual_class.type === 'class')){
                var table = document.createElement('table');
            table.style.height = '100%';
            table.style.width = '100%';
            table.style.backgroundColor = '#fcba03';
            table.style.padding = '10px';
            
            var body = document.createElement('tbody');

            //tr1.style.borderCollapse = 'collapse';


            //Header
            var tr1 = document.createElement('tr');
            var container_div = document.createElement('div');

            container_div.style.textAlign = 'center';
            container_div.style.fontSize = '12px';
            container_div.style.borderBottom = '1px solid black';

            var header_div = document.createElement('div');
            var className_div = document.createElement('div');
            mxUtils.write(header_div, '<<' + actual_class.type + '>>' );
            mxUtils.write(className_div, actual_class.name );

            container_div.appendChild(header_div);
            container_div.appendChild(className_div);
            tr1.appendChild(container_div);

            //Attributes
            var tr2 = document.createElement('tr');
            var attribute_container_div = document.createElement('div');

            attribute_container_div.style.textAlign = 'left';
            attribute_container_div.style.fontSize = '10px';        
            attribute_container_div.style.borderBottom = '1px solid black';
            attribute_container_div.style.minHeight = '5px';

            for (let index = 0; index < actual_class.attributes.length; index++) {
                const attribute =  actual_class.attributes[index];

                var attribute_div = document.createElement('div');

                var content_string = attribute.visibility +
                 " " + attribute.name + 
                 ": " + attribute.dataType

                mxUtils.write(attribute_div, content_string );
    
                attribute_container_div.appendChild(attribute_div);   
            }

            tr2.appendChild(attribute_container_div);

            //Methods
            var tr3 = document.createElement('tr');
            var method_container_div = document.createElement('div');

            method_container_div.style.textAlign = 'left';
            method_container_div.style.fontSize = '10px';        
            method_container_div.style.borderBottom = '1px solid black';
            method_container_div.style.minHeight = '5px'

            for (let index = 0; index < actual_class.methodes.length; index++) {
                const method =  actual_class.methodes[index];

                var method_div = document.createElement('div');

                var content_string = method.visibility +
                 " " + method.name + 
                 " " + method.getAttributeListAsString() +
                 ": " + method.dataType


                mxUtils.write(method_div, content_string );
    
                method_container_div.appendChild(method_div);   
            }

            tr3.appendChild(method_container_div);




            body.appendChild(tr1);
            body.appendChild(tr2);
            body.appendChild(tr3);
            table.appendChild(body);
            
            return table;
            }

            
        }

        


    }

    public start(): void{
        this.graph.getModel().beginUpdate();

        var activeVertexes: {[id: string]: any; } ={};

        var count = this.diagram?.class_declarations.length ? this.diagram?.class_declarations.length : 0;
        console.log(count);
        var x = 200;
        var y = 0;
        
        for (let index = 0; index < count; index++) {
            if(index % 5 == 0){
                y = y + 150;
                x = 200;
            }
            let element = this.diagram?.class_declarations[index];
            activeVertexes[element.alias] = this.graph.insertVertex(this.parentContainer, null, element,x,y,20,20);
            x = x + 400;
            this.graph.updateCellSize(activeVertexes[element.alias],true);
            


        }

        var edgeCount = this.diagram?.connection_declarations.length ? this.diagram?.connection_declarations.length : 0;

        for (let index = 0; index < edgeCount; index++) {
            let connection = this.diagram?.connection_declarations[index];
            //console.log(connection);
            
            const e1 = this.graph.insertEdge(this.parentContainer,
                null,
                "",
                activeVertexes[connection.leftElement],
                activeVertexes[connection.rightElement],
                this.getLineStyle(connection.connector)+
                this.getStartArrowStyle(connection.connector)+
                'endArrow=dash;sourcePerimeterSpacing=4');
            
        }
    }

    private getLineStyle(connector: string) : string{
        if (connector.includes('..') ) { 
            console.log(connector);
            
            return 'dashed=1;';
        }
        return 'dashed=0;';
    }

    private getStartArrowStyle(connector: string) : string{
        if (connector.indexOf('o') === 0 ) { 
            return 'startArrow=diamond;startFill=0;';
        }
        else if(connector.indexOf('<|') === 0){
            return 'startArrow=block;startFill=0;startSize=20;'
        }
        else if(connector.indexOf('*') === 0){
            return 'startArrow=diamond;startFill=1;'
        }
        else if(connector.indexOf('<') === 0){
            return 'startArrow=classic;startFill=1;'
        }
        return 'startArrow=dash';
    }
}