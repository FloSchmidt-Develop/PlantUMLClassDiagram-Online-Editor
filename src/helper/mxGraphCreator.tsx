import IDiagram from "../interfaces/diagram";
import IClass from "../interfaces/class";

import Class from "../classes/parserRep/class";
import Attribute from "../classes/parserRep/attribute";
import Method from "../classes/parserRep/method";
import Connection from "../classes/parserRep/connection";
import Diagram from "../classes/parserRep/diagram";
import TypeSelectCreator from './htmlCreators/typeSelectCreator';
import NameSelectCreator from './htmlCreators/nameInputCreator';
import AttributeInputCreator from './htmlCreators/attributeInputCreator';
import MethodInputCreator from './htmlCreators/methodInputCreator';
import { start } from "repl";

import {
  mxGraph,
  mxRubberband,
  mxKeyHandler,
  mxClient,
  mxUtils,
  mxEvent,
  mxRectangle,
  mxGraphHandler,
  mxEdgeHandler,
  mxConstants,
  mxEdgeStyle
} from "mxgraph-js";
import typeSelectCreator from "./htmlCreators/typeSelectCreator";

export default class MxGraphCreator {
  graph: any;
  parentContainer: any;
  diagram: IDiagram;
  editPanel: React.RefObject<HTMLDivElement>;

  constructor(graph: any, diagram: IDiagram, editPanel: React.RefObject<HTMLDivElement>) {
    this.graph = graph;
    this.editPanel = editPanel;
    

    this.graph.setHtmlLabels(true);
    this.graph.setCellsResizable(true);
    //this.graph.setResizeContainer(false);

    var style = graph.getStylesheet().getDefaultEdgeStyle();
    style[mxConstants.STYLE_ROUNDED] = true;
    style[mxConstants.STYLE_EDGE] = mxEdgeStyle.ElbowConnector;
    graph.alternateEdgeStyle = 'elbow=vertical';


    mxGraphHandler.prototype.guidesEnabled = true;
    mxEdgeHandler.prototype.snapToTerminals = true;


    this.graph.getSelectionModel().addListener(mxEvent.CHANGE, function(sender, evt)
		{

          if (sender.cells[0] !== null && typeof sender.cells[0] !== 'undefined' && typeof (sender.cells[0].value as Class) !== 'undefined') {
            let table = document.createElement("table");

          //type
          let typeSelectCreator = new TypeSelectCreator(graph);
          let type_tr = typeSelectCreator.createTypeSeclectDiv(sender.cells[0].value as IClass, sender);
          table.appendChild(type_tr);

          //name
          let nameInputCreator = new NameSelectCreator(graph);
          let name_tr = nameInputCreator.createNameInputDiv(sender.cells[0].value as IClass, sender);
          table.appendChild(name_tr);

          //attribute
          let attributeInputCreator = new AttributeInputCreator(graph);
          let attribute_div = attributeInputCreator.createNameInputDiv(sender.cells[0].value as IClass, sender);
          let attributeHeader = document.createElement('h3');
          attributeHeader.innerText = 'Attributes';

          let newAttributeButton = document.createElement('button');
          newAttributeButton.innerText = 'at new Attribute';
          newAttributeButton.onclick = () =>{
            (sender.cells[0].value as IClass)?.attributes.push(new Attribute('name','dataType',''));
          }

          //method
          let methodInputCreator = new MethodInputCreator(graph);
          let methode_div = methodInputCreator.createNameInputDiv(sender.cells[0].value as IClass, sender);
          let methodHeader = document.createElement('h3');
          methodHeader.innerText = 'Methods';

          let view = document.createElement('div');
          view.appendChild(table);
          view.appendChild(attributeHeader);
          view.appendChild(attribute_div);
          view.appendChild(newAttributeButton);
          view.appendChild(methodHeader);
          view.appendChild(methode_div);

          if (editPanel.current !== null) {
            var oldChild = editPanel.current.firstChild;
            if (oldChild !== null) {
              editPanel.current?.removeChild(oldChild);
            }
            editPanel.current?.appendChild(view);
          }
          }
          
                 
		});
    
    new mxKeyHandler(this.graph);

    // Overrides method to disallow edge label editing
    this.graph.isCellEditable = function(cell)
    {
      return !this.getModel().isEdge(cell);
    };


    this.parentContainer = graph.getDefaultParent();
    this.diagram = diagram;

    this.graph.getLabel = function (cell) {
      var actual_class: IClass = cell.value;
      if(actual_class !== null && typeof actual_class !== 'undefined' && (actual_class.type === 'interface' || actual_class.type === 'class' ||actual_class.type === 'object')){
      if (actual_class !== null) {
        var table = document.createElement("table");
        table.style.backgroundColor = "yellow";
        table.style.fontFamily = 'Consolas'
        table.style.padding = "10px";
        table.style.maxWidth = actual_class.getWidth().toString();
        table.style.border = '0px';
        table.style.margin = '0px';


        var body = document.createElement("tbody");

        //tr1.style.borderCollapse = 'collapse';

        //Header
        var tr1 = document.createElement("tr");
        var container_div = document.createElement("div");

        container_div.style.textAlign = "center";
        container_div.style.fontSize = "12px";
        container_div.style.borderBottom = "1px solid black";

        var header_div = document.createElement("div");
        var className_div = document.createElement("div");
        mxUtils.write(header_div, "<<" + actual_class.type + ">>");
        mxUtils.write(className_div, actual_class.name);

        container_div.appendChild(header_div);
        container_div.appendChild(className_div);
        tr1.appendChild(container_div);

        body.appendChild(tr1);

        if (actual_class.type === "interface" || actual_class.type === "class") {

        //Attributes
            var tr2 = document.createElement("tr");
            var attribute_container_div = document.createElement("div");

            attribute_container_div.style.textAlign = "left";
            attribute_container_div.style.fontSize = "10px";
            attribute_container_div.style.borderBottom = "1px solid black";
            attribute_container_div.style.minHeight = "5px";

            for (let index = 0; index < actual_class.attributes.length; index++) {
            const attribute = actual_class.attributes[index];

            var attribute_div = document.createElement("div");

            var content_string =
                attribute.visibility +
                " " +
                attribute.name +
                ": " +
                attribute.dataType;

            mxUtils.write(attribute_div, content_string);

            attribute_container_div.appendChild(attribute_div);
            }

            tr2.appendChild(attribute_container_div);

        //Methods
            var tr3 = document.createElement("tr");
            var method_container_div = document.createElement("div");

            method_container_div.style.textAlign = "left";
            method_container_div.style.fontSize = "10px";
            method_container_div.style.borderBottom = "1px solid black";
            method_container_div.style.minHeight = "5px";

            for (let index = 0; index < actual_class.methods.length; index++) {
            const method = actual_class.methods[index];

            var method_div = document.createElement("div");

            var content_string =
                method.visibility +
                " " +
                method.name +
                " " +
                method.getAttributeListAsString() +
                ": " +
                method.dataType;

            mxUtils.write(method_div, content_string);

            method_container_div.appendChild(method_div);


        }

        tr3.appendChild(method_container_div);
        body.appendChild(tr2);
        body.appendChild(tr3);
        }

        else if (actual_class.type === 'object') {
            var tr2 = document.createElement("tr");
            var declaration_divContainer = document.createElement("div");

            declaration_divContainer.style.textAlign = "left";
            declaration_divContainer.style.fontSize = "10px";
            declaration_divContainer.style.borderBottom = "1px solid black";
            declaration_divContainer.style.minHeight = "5px";

            for (let index = 0; index < actual_class.declarations.length; index++) {
                const declaration = actual_class.declarations[index];
    
                var declaration_div = document.createElement("div");
    
                var content_string =
                    declaration.name +
                    "= " +
                    declaration.declaration_value;
    
                mxUtils.write(declaration_div, content_string);
    
                declaration_divContainer.appendChild(declaration_div);
                }
    
                tr2.appendChild(declaration_divContainer);
                body.appendChild(tr2);
        }

        

        table.appendChild(body);

        return table;
      }
    }
    //TODO: check if it is really a connection
    else{
      return cell.value;
    }

    
}
  }

  public start(): void {

    let style = new Object();
    style[mxConstants.STYLE_SHAPE] = mxConstants.SHAPE_LABEL;
    style[mxConstants.STYLE_STROKECOLOR] = '#0ff000';
    style[mxConstants.STYLE_ALIGN] = mxConstants.ALIGN_CENTER;
    style[mxConstants.STYLE_VERTICAL_ALIGN] = mxConstants.ALIGN_TOP;
    style[mxConstants.STYLE_SPACING_TOP] = '0';
    style[mxConstants.STYLE_SPACING] = '0';
    this.graph.getStylesheet().putCellStyle('bottom', style);

    this.graph.getModel().beginUpdate();

    var activeVertexes: { [id: string]: any } = {};

    var count = this.diagram?.class_declarations.length
      ? this.diagram?.class_declarations.length
      : 0;
    console.log(count);
    var x = 200;
    var y = 0;

    for (let index = 0; index < count; index++) {
      if (index % 4 == 0) {
        y = y + 150;
        x = 200;
      }
      let element = this.diagram?.class_declarations[index];
      activeVertexes[element.alias] = this.graph.insertVertex(
        this.parentContainer,
        null,
        element,
        x,
        y,
        element.getWidth() * 0.60,
        67 + (element.attributes.length * 11) + (element.methods.length * 11) + (element.declarations.length * 11) - (element.attributes.length !== 0 ? 3 : 0) - (element.methods.length !== 0 ? 3 : 0),
        'bottom'
      );
      x = x + 400;
      //this.graph.updateCellSize(activeVertexes[element.alias], true);
    }

    var edgeCount = this.diagram?.connection_declarations.length
      ? this.diagram?.connection_declarations.length
      : 0;

    for (let index = 0; index < edgeCount; index++) {
      let connection = this.diagram?.connection_declarations[index];

      const e1 = this.graph.insertEdge(
        this.parentContainer,
        null,
        connection.stereoType,
        activeVertexes[connection.leftElement],
        activeVertexes[connection.rightElement],
        this.getLineStyle(connection.connector) +
          this.getStartArrowStyle(connection.connector) +
          "endArrow=dash;sourcePerimeterSpacing=0;shape=link;edgeStyle=orthogonalEdgeStyle;"
      );
    }
  }

  private getLineStyle(connector: string): string {
    if (connector.includes("..")) {
      console.log(connector);

      return "dashed=1;";
    }
    return "dashed=0;";
  }

  private getStartArrowStyle(connector: string): string {
    if (connector.indexOf("o") === 0) {
      return "startArrow=diamond;startFill=0;";
    } else if (connector.indexOf("<|") === 0) {
      return "startArrow=block;startFill=0;startSize=20;";
    } else if (connector.indexOf("*") === 0) {
      return "startArrow=diamond;startFill=1;";
    } else if (connector.indexOf("<") === 0) {
      return "startArrow=classic;startFill=1;";
    }
    return "startArrow=dash";
  }

  private selectionChanged(graph): void
	{
    var cell = graph.getSelectionCell();
    console.log(cell);
    return;
    
  }
}
