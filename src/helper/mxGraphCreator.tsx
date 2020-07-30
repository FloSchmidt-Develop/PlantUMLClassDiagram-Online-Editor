import IDiagram from "../interfaces/diagram";
import IClass from "../interfaces/class";
import IConnector, {Arrows, Lines, LayoutProperty} from '../interfaces/connector'

import Class from "../classes/parserRep/class";
import MyObject from '../classes/parserRep/myObject';
import Connection from "../classes/parserRep/connection";


import {
  mxPoint,
} from "mxgraph-js";
import IPackage from "../interfaces/package";



export default class MxGraphCreator {
  graph: any;
  parentContainer: any;
  diagram: IDiagram;
  editPanel: React.RefObject<HTMLDivElement>;

  constructor(graph: any, diagram: IDiagram, editPanel: React.RefObject<HTMLDivElement>) {
    this.graph = graph;
    this.editPanel = editPanel;
    this.parentContainer = graph.getDefaultParent();
    this.diagram = diagram;
  }

  public start(): void {

    this.graph.getModel().beginUpdate();

    var activeVertexes: { [id: string]: any } = {};
    var activePackages: { [id: string]: any } = {};
    var activeEdges: {[id: string]: any } = {};
    var x = 100;
    var y = 100;
    


    //Packages without package
    let topLevelPackages = this.diagram?.package_declarations.filter(e => e.package === '');
    this.addPackages(topLevelPackages, activePackages, x, y)
    
    //classes
    var count = this.diagram?.class_declarations.length
      ? this.diagram?.class_declarations.length
      : 0;

    for (let index = 0; index < count; index++) {

      if (index % 4 == 0) {
        y = y + 150;
        x = 200;
      }

      //HINT: Set Default start position --- find better solution here

      //Add Classes
      let element = this.diagram?.class_declarations[index];
      //console.log(element);
      element.x = element.x === 0 ? x : element.x ;
      element.y = element.y === 0 ? y : element.y ;
      activeVertexes[element.alias] = this.graph.insertVertex(
        element.package !== '' ? activePackages[element.package] : this.parentContainer,
        element.id,
        element,
        element.x,
        element.y,
        element.getWidth(),
        element.getHeight()
      );
      //console.log(activeVertexes[element.alias]);
      
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
        //console.log(connection);
        
        let source = this.diagram.class_declarations.find(e => e.getName() === connection.sourceElement) as Class;
        source?.registerObserver(connection as Connection);

        let target = this.diagram.class_declarations.find(e => e.getName() === connection.destinationElement) as Class;
        target?.registerObserver(connection as Connection);

        activeEdges['(' + connection.destinationElement + ',' + connection.sourceElement + ')'] = this.graph.insertEdge(
          this.parentContainer,
          connection.id,
          connection,
          activeVertexes[connection.sourceElement],
          activeVertexes[connection.destinationElement],
          this.getEdgeStyle(connection.connector)
        );

        

        if(connection.points != null){
          let points: any[] = [];
          for (let index = 0; index < connection.points.length; index++) {
            const point = connection.points[index];
            points.push(new mxPoint(point.x,point.y));
            
          }
          activeEdges['(' + connection.destinationElement + ',' + connection.sourceElement + ')']
          .geometry.points = points;
        }
        
      }

        var e21 = this.graph.insertVertex(activeEdges['(' + connection.destinationElement + ',' + connection.sourceElement + ')'], connection.id + 'L', connection.multiplicity_left, -0.9, 0, 0, 0,
                'fontSize=14;fontColor=#000000;fillColor=#ffffff;strokeOpacity=0;fillOpacity=0;strokeWidth=0;', true);        
        this.graph.updateCellSize(e21);
        connection.multiplicity_left.vertex = e21;
        e21.isConnectable = () => false;


        var e12 = this.graph.insertVertex(activeEdges['(' + connection.destinationElement + ',' + connection.sourceElement + ')'], null, connection.multiplicity_right, 0.9, 0, 0, 0,
                'fontSize=14;fontColor=#000000;fillColor=#ffffff;strokeOpacity=0;fillOpacity=0;strokeWidth=0;', true);
        this.graph.updateCellSize(e12);
        connection.multiplicity_right.vertex = e12;
        e12.isConnectable = () => false;
            
    }
  }

  private addPackages(packages: IPackage[], activePackages: any, x: number, y: number){

    packages.forEach( e => {
      let activePackage = e

      if (activePackage.x === 0)
        activePackage.x = x;
      if (activePackage.y === 0)
        activePackage.y = y;
      
      console.log(activePackage);
      
      activePackages[activePackage.getName()] = this.graph.insertVertex(
        activePackage.package !== '' ? activePackages[activePackage.package] : this.parentContainer,
        null,
        activePackage,
        activePackage.x,
        activePackage.y,
        activePackage.getWidth(),
        activePackage.getHight(),
        'shape=swimlane;startSize=20;'
      )

      if(activePackage.packageReferences.length > 0){
        this.addPackages(activePackage.packageReferences,activePackages,x,y);
      }
    }
    )
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

}
