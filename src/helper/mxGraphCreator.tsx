import IDiagram from "../interfaces/diagram";
import IClass from "../interfaces/class";
import IConnector, {Arrows, Lines} from '../interfaces/connector'

import Class from "../classes/parserRep/class";
import Connection from "../classes/parserRep/connection";
import TypeSelectCreator from './htmlCreators/typeSelectCreator';
import NameSelectCreator from './htmlCreators/nameInputCreator';
import DeclarationInputCreator from './htmlCreators/declarationInputCreator';
import ConnectionInputCreator from './htmlCreators/connectionInputCreator';
import ClassEditingView from '../classes/view/editing/classEditing';

import IName from '../interfaces/named';
import ClassIcon from '../images/Class.png'
import AbstractClassIcon from '../images/AbstractClass.png'
import InterfaceIcon from '../images/Interface.png'
import ObjectIcon from '../images/Object.png'

import { start } from "repl";

import {
  mxGraph,
  mxMarker,
  mxKeyHandler,
  mxClient,
  mxUtils,
  mxEvent,
  mxPoint,
  mxDragSource,
  mxGraphHandler,
  mxEdgeHandler,
  mxConstants,
  mxEdgeStyle,
  mxHierarchicalLayout,
  mxRubberband,
  mxCodec,
  mxUndoManager
} from "mxgraph-js";
import Declaration from "../classes/parserRep/declaration";
import Package from "../classes/parserRep/package";
import DiagramCreator from "./diagramCreator";
import ClassUpdateController from "../classes/controller/classUpdateController";
import Multiplicity from "../classes/parserRep/multiplicity";

export default class MxGraphCreator {
  graph: any;
  parentContainer: any;
  diagram: IDiagram;
  editPanel: React.RefObject<HTMLDivElement>;

  constructor(graph: any, diagram: IDiagram, editPanel: React.RefObject<HTMLDivElement>) {
    this.graph = graph;
    this.editPanel = editPanel;
    this.parentContainer = graph.getDefaultParent();
    

    this.graph.setHtmlLabels(true);
    this.graph.setCellsResizable(true);
    //this.graph.setResizeContainer(false);

    var style = graph.getStylesheet().getDefaultEdgeStyle();
    style[mxConstants.STYLE_ROUNDED] = true;
    style[mxConstants.STYLE_EDGE] = mxEdgeStyle.ElbowConnector;
    this.graph.alternateEdgeStyle = 'elbow=vertical';


    mxGraphHandler.prototype.guidesEnabled = true;
    mxEdgeHandler.prototype.snapToTerminals = true;
      


    //Function to show the Element in the editing Panel
    this.graph.getSelectionModel().addListener(mxEvent.CHANGE, function(sender, evt)
		{
      
      let view = document.createElement('div');
      console.log('----change----');
      console.log(evt);
      

        var senderClass = sender.cells[0];
        
        
          if ( typeof senderClass !== 'undefined'){
            if( senderClass.value != null 
            && (typeof senderClass.value) !== 'undefined'
            && ((senderClass.value as Class).type === 'class'
              || (senderClass.value as Class).type === 'abstractclass'
              || (senderClass.value as Class).type === 'interface'
              || (senderClass.value as Class).type === 'object')) {


          let table = document.createElement("table");

          //type
          let typeSelectCreator = new TypeSelectCreator(graph);
          let type_tr = typeSelectCreator.createTypeSeclectDiv(sender.cells[0].value, sender);
          table.appendChild(type_tr);

          //name
          let nameInputCreator = new NameSelectCreator(graph);
          let name_tr = nameInputCreator.createNameInputDiv(sender.cells[0].value as Class, sender);
          table.appendChild(name_tr);
          view.appendChild(table);

          if((senderClass.value as Class).type === 'class'
          || (senderClass.value as Class).type === 'abstractclass'
          || (senderClass.value as Class).type === 'interface'){
            
          ClassEditingView.CreateClassEditingView(senderClass.value as Class,sender,graph,view);

        }
        else if(
          (senderClass.value as Class).type === 'object'
        ){
          
          //method
          let declarationInputCreator = new DeclarationInputCreator(graph);
          let declaration_div = declarationInputCreator.createNameInputDiv(sender.cells[0].value as Class, sender);
          let declarationHeader = document.createElement('h3');
          declarationHeader.innerText = 'Declarations';

          let newDeclarationButton = document.createElement('button');
          newDeclarationButton.innerText = 'at new Declaration';
          newDeclarationButton.onclick = () =>{
            let classToaddMethod = (sender.cells[0].value as Class);

            if (classToaddMethod != null){
              classToaddMethod.declarations.push(new Declaration('name',''));

              graph.getModel().beginUpdate();
              ClassUpdateController.updateClassValues(graph,sender.cells[0], classToaddMethod);
              graph.getModel().endUpdate();

              let tempSelectedCell = sender.cells[0];
              graph.getSelectionModel().clear();
              graph.getSelectionModel().addCell(tempSelectedCell);
            }
          }

          view.appendChild(declarationHeader);
          view.appendChild(declaration_div);
          view.appendChild(newDeclarationButton);
        }

          
      }

      //Connection------------------------------------
      else if (senderClass.value != null 
        && (sender.cells[0].value as Connection) != null 
        && (sender.cells[0].value as Connection).type === 'Connection') {
          
        let attributeHeader = document.createElement('h3');
        attributeHeader.innerText = 'Connection';

        let table = document.createElement("table");

        //type
        let connectionInputCreator = new ConnectionInputCreator(graph);
        let type_tr = connectionInputCreator.createTypeSeclectDiv(sender.cells[0].value, sender);
        table.appendChild(type_tr[0]);
        table.appendChild(type_tr[1]);
        table.appendChild(type_tr[2]);
        table.appendChild(type_tr[3]);
        table.appendChild(type_tr[4]);
        table.appendChild(type_tr[5]);



        view.appendChild(attributeHeader);
        view.appendChild(table);
      }
      else if (senderClass.value != null 
        && (sender.cells[0].value as Package) != null 
        && (sender.cells[0].value as Package).type === 'Package') {
          
        let attributeHeader = document.createElement('h3');
        attributeHeader.innerText = 'Package';

        let table = document.createElement("table");

        let nameInputCreator = new NameSelectCreator(graph);
        let name_tr = nameInputCreator.createNameInputDiv(sender.cells[0].value as IName, sender);
        table.appendChild(name_tr);
        view.appendChild(table);

        //type


        view.appendChild(attributeHeader);
        view.appendChild(table);
      }
    }
    else{
      let attributeHeader = document.createElement('h3');
      attributeHeader.innerText = 'Noting Selected';
      view.appendChild(attributeHeader);
    }

      if (editPanel.current !== null) {
        var oldChild = editPanel.current.firstChild;
        if (oldChild !== null) {
          editPanel.current?.removeChild(oldChild);
        }
        editPanel.current?.appendChild(view);
      }
           
    });
    
    new mxKeyHandler(this.graph);

    // Overrides method to disallow edge label editing
    this.graph.isCellEditable = function(cell)
    {
      return this.getModel().isEdge(cell);
    };

  
    


    
    this.diagram = diagram;

    this.graph.getLabel = function (cell) {

      //Class------------------------------------------------------------------------------------------------
      var actual_class: IClass = cell.value;
      if(actual_class !== null 
        && typeof actual_class !== 'undefined' 
        && (actual_class.type === 'interface' || actual_class.type === 'abstractclass'
          || actual_class.type === 'class' ||actual_class.type === 'object')){
      if (actual_class !== null) {
        var table = document.createElement("table");
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
        var dummy_div = document.createElement("div");
        var header_icon = document.createElement("img");
        var header_text = document.createElement("p");

        header_icon.src = actual_class.type === 'class' 
          ? ClassIcon : actual_class.type === 'abstractclass' 
          ? AbstractClassIcon : actual_class.type === 'interface' 
          ? InterfaceIcon : actual_class.type === 'object'
          ? ObjectIcon : ClassIcon;
        header_icon.style.width = '40px';
        header_icon.style.height = '40px';
        header_icon.style.marginLeft = '20px';
        header_icon.style.marginRight= '20px';

        dummy_div.style.width = '40px';
        dummy_div.style.height = '40px';
        dummy_div.style.marginRight = '20px';
        dummy_div.style.marginLeft = '20px';

        header_text.innerText = actual_class.name;
        header_text.style.marginTop = '13px';
        header_text.style.fontSize = '14px';
        header_text.style.marginBottom = '13px';

        header_div.style.display = 'flex';
        header_div.style.justifyContent = 'space-between';

        header_div.appendChild(header_icon);
        header_div.appendChild(header_text);


        header_div.appendChild(dummy_div);
        container_div.appendChild(header_div);
        tr1.appendChild(container_div);

        body.appendChild(tr1);

        if (actual_class.type === "interface" || actual_class.type === "class" || actual_class.type === "abstractclass") {

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
            attribute_div.style.display = 'flex';

            var content_string =
                attribute.visibility +
                " " +
                attribute.name +
                ": " +
                attribute.dataType;

            //attribute_div.appendChild(icon);
            mxUtils.write(attribute_div, content_string);
            

            //attribute_container_div.appendChild(icon);
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

        //Object-----------------------------------------------------------------------------
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
    //Connection
    else if((cell.value as Connection) != null && (cell.value as Connection).type === 'Connection'){ 
      let connection = (cell.value as Connection);
      return connection.stereoType;
    }
    //Package
    else if((cell.value as Package) != null && (cell.value as Package).type === 'Package'){ 
      let actualPackage = (cell.value as Package);
      return actualPackage.name;
    }
    //Multiplicity
    else if((cell.value as Multiplicity) != null && (cell.value as Multiplicity).type === 'Multiplicity'){ 
      let actualMultiplicity = (cell.value as Multiplicity);
      return actualMultiplicity.value;
    }
    else{  
        if(cell.edge && cell.target != null && cell.source != null){
          var connection = new Connection('<--','','', cell.target.value.alias,cell.source.value.alias,'');
          diagram.addConnection(connection);
          
          graph.getModel().beginUpdate();
    
          graph.model.setValue(cell, connection);
          
          graph.model.setStyle(cell, "sourcePerimeterSpacing=0;shape=link;edgeStyle=orthogonalEdgeStyle;");

          var e21 = graph.insertVertex(cell, connection.id + 'L', connection.multiplicity_left, -1, 0, 0, 0,
          'fontSize=12;fontColor=#000000;fillColor=#ffffff;strokeOpacity=0;fillOpacity=0;strokeWidth=0;', true);
          connection.multiplicity_left.vertex = e21;

          var e12 = graph.insertVertex(cell, null, connection.multiplicity_right, 1, 0, 0, 0,
          'fontSize=16;fontColor=#000000;fillColor=#ffffff;strokeOpacity=0;fillOpacity=0;strokeWidth=0;', true);
          connection.multiplicity_right.vertex = e12;


    
          graph.getModel().endUpdate();
        }
        else{
          return cell.value;   
        }
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

    //Connect of Two Cells
    this.graph.connectionHandler.addListener(mxEvent.CONNECT, 
      function(sender, evt) {

        var edge = evt.getProperty('cell');
        let sourceClass : Class;
        let targetClass: Class;
        if(edge != null){
          
          if(edge.source != null && edge.target != null){
            sourceClass = edge.source.value as Class;
            targetClass = edge.target.value as Class;
              if(targetClass != null && sourceClass != null){
                //TODO Find solution
                DiagramCreator.diagram.addConnection(
                  new Connection('-->','','',targetClass.alias,sourceClass.alias,'')
                  );

          }     
        }
        
      }
        
        
        
    });

    this.graph.dropEnabled = true;

    this.graph.getModel().beginUpdate();

    var activeVertexes: { [id: string]: any } = {};
    var activePackages: { [id: string]: any } = {};
    var activeEdges: {[id: string]: any } = {};
    var x = 200;
    var y = 0;
    


    //Package
    var packageCount = this.diagram?.package_declarations.length ?
      this.diagram?.package_declarations.length :
      0;


    for (let index = 0; index < packageCount; index++) {
      let activePackage = this.diagram?.package_declarations[index];
      
        activePackages[activePackage.name] = this.graph.insertVertex(
          this.parentContainer,
          null,
          activePackage,
          50,
          400,
          x,
          y,
          'shape=swimlane;startSize=20;'
        )
      
    }

    var count = this.diagram?.class_declarations.length
      ? this.diagram?.class_declarations.length
      : 0;



    for (let index = 0; index < count; index++) {

      //HINT: Set Default start position --- find better solution here
      if (index % 4 == 0) {
        y = y + 150;
        x = 200;
      }

      //Add Classes
      let element = this.diagram?.class_declarations[index];
      activeVertexes[element.alias] = this.graph.insertVertex(
        element.package !== '' ? activePackages[element.package] : this.parentContainer,
        element.id,
        element,
        x,
        y,
        0,
        0,
        'bottom'
      );
      x = x + 400;

    }

    var edgeCount = this.diagram?.connection_declarations.length
      ? this.diagram?.connection_declarations.length
      : 0;

    for (let index = 0; index < edgeCount; index++) {
      let connection = this.diagram?.connection_declarations[index];

      if(connection.sourceElement.includes('(')){
        activeEdges['(' + connection.destinationElement + ',' + connection.sourceElement.replace('(','').replace(')', '') + ')']  = this.graph.insertEdge(
          this.parentContainer,
          connection.id,
          connection,
          activeEdges[connection.sourceElement],
          activeVertexes[connection.destinationElement],
          this.getEdgeStyle(connection.connector)
        );
        
      }
      else if(connection.destinationElement.includes('(')){
   
        activeEdges['(' + connection.destinationElement.replace('(','').replace(')', '') + ',' + connection.sourceElement + ')']   = this.graph.insertEdge(
          this.parentContainer,
          connection.id,
          connection,
          activeVertexes[connection.sourceElement],
          activeEdges[connection.destinationElement],
          this.getEdgeStyle(connection.connector)
        );
      }
      else{
        activeEdges['(' + connection.destinationElement + ',' + connection.sourceElement + ')'] = this.graph.insertEdge(
          this.parentContainer,
          connection.id,
          connection,
          activeVertexes[connection.sourceElement],
          activeVertexes[connection.destinationElement],
          this.getEdgeStyle(connection.connector)
        );
      }

        var e21 = this.graph.insertVertex(activeEdges['(' + connection.destinationElement + ',' + connection.sourceElement + ')'], connection.id + 'L', connection.multiplicity_left, -1, 0, 0, 0,
                'fontSize=12;fontColor=#000000;fillColor=#ffffff;strokeOpacity=0;fillOpacity=0;strokeWidth=0;', true);        
        this.graph.updateCellSize(e21);
        connection.multiplicity_left.vertex = e21;
      
        //e21.geometry.offset = new mxPoint(e21.geometry.width, e21.geometry.height);

        var e12 = this.graph.insertVertex(activeEdges['(' + connection.destinationElement + ',' + connection.sourceElement + ')'], null, connection.multiplicity_right, 1, 0, 0, 0,
                'fontSize=16;fontColor=#000000;fillColor=#ffffff;strokeOpacity=0;fillOpacity=0;strokeWidth=0;', true);
        console.log(connection);
        connection.multiplicity_right.vertex = e12;
        
        this.graph.updateCellSize(e12);
        //e21.geometry.offset = new mxPoint(-e12.geometry.width, -e12.geometry.height);


     
    }
    /*
    var layout = new mxHierarchicalLayout(this.graph, mxConstants.DIRECTION_NORTH, true);
    
    var packages = Object.keys(activePackages);
    for (let index = 0; index < packages.length; index++) {
      let packageName = packages[index];
      layout.execute(activePackages[packageName]);
    }
    if(packages.length === 0){
      layout.execute(this.parentContainer);
    }
    */
    this.graph.getModel().parentForCellChanged = function(cell,parent,index){
      if(parent != null){
        parent.insert(cell,index);
      
        if(parent.value != null && cell.value != null){
          let newPackage = parent.value as Package;
          let changedClass = cell.value as Class;
          if(newPackage != null && changedClass != null && newPackage instanceof Package && changedClass instanceof Class){
            changedClass.package = newPackage.name;
          }
        }
        else if(cell.value != null && cell.value instanceof Class){
          let changedClass = cell.value as Class;
          if(changedClass != null){
            changedClass.package = '';
          }
        } 
      }
  
    }


    
    //this.graph.getModel().endUpdate();

  }


  private getEdgeStyle(connector: IConnector): string{
    return this.getLineStyle(connector) +
    this.getStartArrowStyle(connector) +
    this.getEndArrowStyle(connector) + 
    "sourcePerimeterSpacing=0;shape=link;edgeStyle=orthogonalEdgeStyle;"
  }

  private getLineStyle(connector: IConnector): string {
    if (connector.lineStyle === Lines.dotted) {
      return "dashed=1;";
    }
    return "dashed=0;";
  }

  private getStartArrowStyle(connector: IConnector): string {
    if (connector.startArrowSymbol === Arrows.diamond) {
      return "startArrow=diamond;startFill=0;";
    } else if (connector.startArrowSymbol === Arrows.big) {
      return "startArrow=block;startFill=0;startSize=20;";
    } else if (connector.startArrowSymbol === Arrows.diamondFilled) {
      return "startArrow=diamond;startFill=1;";
    } else if (connector.startArrowSymbol === Arrows.normal) {
      return "startArrow=classic;startFill=1;";
    }
    return "startArrow=dash;";
  }

  private getEndArrowStyle(connector: IConnector): string {
    if (connector.endArrowSymbol === Arrows.diamond) {
      return "endArrow=diamond;endFill=0;";
    } else if (connector.endArrowSymbol === Arrows.big) {
      return "endArrow=block;endFill=0;endSize=20;";
    } else if (connector.endArrowSymbol === Arrows.diamondFilled) {
      return "endArrow=diamond;endFill=1;";
    } else if (connector.endArrowSymbol === Arrows.normal) {
      return "endArrow=classic;endFill=1;";
    }
    return "endArrow=dash;endFill=0;";
  }


  private CreateArrowWithNumber(num: string, isStart: boolean): string{

    mxMarker.addMarker("myconnector" + num + (isStart ? 'start' : 'end'), function(canvas, shape, type, pe, unitX, unitY, size, source, sw, filled)
    {

      return function()
      {
        if (isStart) {
          canvas.text(pe.x + 5,pe.y - 25,10,10,num);
        }
        else{
          canvas.text(pe.x - 25,pe.y - 25,10,10,num);
        }

      };
    });

    return "myconnector" + num + (isStart ? 'start' : 'end') + ";";

  }

}
