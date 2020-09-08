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
import EdgeStyleCreator from "../classes/view/cellLables/edgeStyle";



export default class MxGraphCreator {
  graph: any;
  parentContainer: any;
  diagram: IDiagram;
  editPanel: React.RefObject<HTMLDivElement>;
  x = 100;
  y = 100;

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

    //classes
    let index = 0;

      //HINT: Set Default start position --- find better solution here

      //Add Classes
      let elements = this.diagram?.class_declarations.filter(e => e.package === '');
      //console.log(element);
      elements.forEach(element => {

        if (index % 4 == 0) {
          this.y = this.y + 150;
          this.x = 200;
        }

        element.x = element.x === 0 ? this.x : element.x ;
        element.y = element.y === 0 ? this.y : element.y ;
        
        activeVertexes[element.alias] = this.graph.insertVertex(
          this.parentContainer,
          element.id,
          element,
          element.x,
          element.y,
          element.getWidth(),
          element.getHeight()
        )
        index++
        this.x = this.x + 400;
      });
    

      //console.log(activeVertexes[element.alias]);

      
      //Packages without package
      let topLevelPackages = this.diagram?.package_declarations.filter(e => e.package === '');
      this.addPackages(topLevelPackages, activePackages)

      
      elements = this.diagram?.class_declarations.filter(e => e.package !== '');
      elements.forEach(element => {

        if (index % 4 == 0) {
          this.y = this.y + 150;
          this.x = 200;
        }

        element.x = element.x === 0 ? this.x : element.x ;
        element.y = element.y === 0 ? this.y : element.y ;
        activeVertexes[element.alias] = this.graph.insertVertex(
          activePackages[element.package],
          element.id,
          element,
          element.x,
          element.y,
          element.getWidth(),
          element.getHeight(),
        )
        index++
        this.x = this.x + 400;
      });


      this.diagram?.note_declarations.forEach(note => {

        if (index % 4 == 0) {
          this.y = this.y + 150;
          this.x = 200;
        }

        note.x = note.x === 0 ? this.x : note.x ;
        note.y = note.y === 0 ? this.y : note.y ;

        
        
        activeVertexes[note.getName()] = this.graph.insertVertex(
          note.relatedTo === '' ? this.parentContainer : activeVertexes[note.relatedTo],
          null,
          note,
          note.relatedTo === '' ? note.x : 1,
          note.relatedTo === '' ? note.y : 1,
          note.relatedTo === '' ? note.getWidth() : 0,
          note.relatedTo === '' ? note.getHight() : 0,
          note.relatedTo === '' ? 'fillColor=yellow;' : 'align=left;verticalAlign=top;;rounded=1;spacingLeft=4;spacingRight=4',
          note.relatedTo === '' ? false : true
        );
        if(note.relatedTo !== ''){
          activeVertexes[note.getName()].offset = new mxPoint(-8, -8);
          this.graph.updateCellSize(test);
        }

        index++
        this.x = this.x + 400;
      });

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
          EdgeStyleCreator.getStyle(connection.connector)
        );
        
      }
      
      else if(connection.destinationElement.includes('(')){
   
        activeEdges['(' + connection.destinationElement.replace('(','').replace(')', '') + ',' + connection.sourceElement + ')']   = this.graph.insertEdge(
          this.parentContainer,
          connection.id,
          connection,
          activeVertexes[connection.sourceElement],
          activeEdges[connection.destinationElement],
          EdgeStyleCreator.getStyle(connection.connector)
        );
      }

      else{
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
          EdgeStyleCreator.getStyle(connection.connector)
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

  private addPackages(packages: IPackage[], activePackages: any){
    
    this.y = this.y + 150;
    this.x = 200;

    packages.forEach( e => {
      let activePackage = e

      if (activePackage.x === 0)
        activePackage.x = this.x;
      if (activePackage.y === 0)
        activePackage.y = this.y;
      
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
        this.addPackages(activePackage.packageReferences,activePackages);
      }
    }
    )
  }

}
