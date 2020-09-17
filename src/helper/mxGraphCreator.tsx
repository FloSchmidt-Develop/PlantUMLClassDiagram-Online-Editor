import IDiagram from "../interfaces/diagram";
import {Arrows, Lines, LayoutProperty} from '../interfaces/connector'

import Class from "../classes/parserRep/class";
import MyObject from '../classes/parserRep/myObject';
import Connection from "../classes/parserRep/connection";


import {
  mxPoint,
} from "mxgraph-js";
import EdgeStyleCreator from "../classes/view/cellLables/edgeStyle";
import Note from "../classes/parserRep/note";
import Package from "../classes/parserRep/package";



export default class MxGraphCreator {
  graph: any;
  parentContainer: any;
  diagram: IDiagram;
  x = 100;
  y = 100;
  index = 0;

  constructor(graph: any, diagram: IDiagram) {
    this.graph = graph;
    this.parentContainer = graph.getDefaultParent();
    this.diagram = diagram;
  }

  public start(): void {

    this.graph.getModel().beginUpdate();

    var activeVertexes: { [id: string]: any } = {};
    var addedPackageCells: { [id: string]: any } = {};
    var activeEdges: {[id: string]: any } = {};

      //HINT: Set Default start position --- find better solution here
      
      //Packages without package
      let topLevelPackages = this.diagram?.package_declarations.filter(e => e.package === '');
      this.addPackages(topLevelPackages, addedPackageCells)

      //add classes
      let classes = this.diagram?.class_declarations;
      this.addClasses(classes,activeVertexes,addedPackageCells)

      //add notes
      let notes = this.diagram?.note_declarations;
      this.addNotes(notes,activeVertexes,addedPackageCells)

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


  private addClasses(classes: Class[], addedVertexes: any, addedPackageCells: any ){
    classes.forEach(cls => {

      if (this.index % 4 == 0) {
        this.y = this.y + 150;
        this.x = 200;
      }

      cls.x = cls.x === 0 ? this.x : cls.x ;
      cls.y = cls.y === 0 ? this.y : cls.y ;
      addedVertexes[cls.alias] = this.graph.insertVertex(
        cls.package !== '' ? addedPackageCells[cls.package] : this.parentContainer,
        cls.id,
        cls,
        cls.x,
        cls.y,
        cls.getWidth(),
        cls.getHeight(),
      )
      this.index++;
      this.x = this.x + 400;
    });

  }

  private addNotes(notes: Note[], addedVertexes: any, addedPackageCells: any){
    notes.forEach(note => {

      if (this.index % 4 == 0) {
        this.y = this.y + 150;
        this.x = 200;
      }

      note.x = note.x === 0 ? this.x : note.x ;
      note.y = note.y === 0 ? this.y : note.y ;
      addedVertexes[note.getName()] = this.graph.insertVertex(
        note.package !== '' ? addedPackageCells[note.package] : this.parentContainer,
        note.id,
        note,
        note.x,
        note.y,
        note.getWidth(),
        note.getHight(),
        'fillColor=yellow;',
        false
      )
      this.index++;
      this.x = this.x + 400;
    });
  }

  private addPackages(packages: Package[], addedPackageCells: any){
    
    this.y = this.y + 150;
    this.x = 200;

    packages.forEach( e => {
      let activePackage = e

      if (activePackage.x === 0)
        activePackage.x = this.x;
      if (activePackage.y === 0)
        activePackage.y = this.y;

      addedPackageCells[activePackage.getName()] = this.graph.insertVertex(
        activePackage.package !== '' ? addedPackageCells[activePackage.package] : this.parentContainer,
        null,
        activePackage,
        activePackage.x,
        activePackage.y,
        activePackage.getWidth(),
        activePackage.getHight(),
        'shape=swimlane;startSize=20;'
      )

      if(activePackage.packageReferences.length > 0){
        this.addPackages(activePackage.packageReferences,addedPackageCells);
      }
    }
    )
  }

}
