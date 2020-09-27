import IDiagram from "../../interfaces/diagram";
import {Arrows, Lines, LayoutProperty} from '../../interfaces/connector'

import Class from "../model/class";
import Connection from "../model/connection";


import {
  mxPoint,
} from "mxgraph-js";
import EdgeStyleCreator from "../view/cellLables/edgeStyle";
import Note from "../model/note";
import Package from "../model/package";
import DiagramCreator from "../../helper/diagramCreator";



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


    //HINT: Set Default start position --- find better solution here
    
    //add Packages
    let packages = this.diagram?.package_declarations.filter(e => e.package === '');
    this.addPackages(packages, addedPackageCells)

    //add classes
    let classes = this.diagram?.class_declarations;
    this.addClasses(classes,activeVertexes,addedPackageCells)

    //add notes
    let notes = this.diagram?.note_declarations;
    this.addNotes(notes,activeVertexes,addedPackageCells)

    var connections = this.diagram?.connection_declarations;
    this.addConnections(connections,activeVertexes);
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

  private addConnections(connections: Connection[], addedVertexes: any){
    var addedEdges: {[id: string]: any } = {};
    connections.forEach(connection => {
      
      //Check if source Element is Connection
      if(connection.sourceElement.includes('(')){
        addedEdges['(' + connection.destinationElement + ',' + connection.sourceElement.replace('(','').replace(')', '') + ')']  = this.graph.insertEdge(
          this.parentContainer,
          connection.id,
          connection,
          addedEdges[connection.sourceElement],
          addedVertexes[connection.destinationElement],
          EdgeStyleCreator.getStyle(connection.connector)
        );
        
      }
      
      //Check if destination Element is Connection
      else if(connection.destinationElement.includes('(')){
   
        addedEdges['(' + connection.destinationElement.replace('(','').replace(')', '') + ',' + connection.sourceElement + ')']   = this.graph.insertEdge(
          this.parentContainer,
          connection.id,
          connection,
          addedVertexes[connection.sourceElement],
          addedEdges[connection.destinationElement],
          EdgeStyleCreator.getStyle(connection.connector)
        );
      }

      //Source and Destination are no Connection
      else{
        let source: Class | Note;
        console.log(connection);
        
        source = this.diagram.class_declarations.find(e => e.alias === connection.sourceElement) as Class;
        console.log(source);
        console.log(DiagramCreator.diagram);
        
        
        if(source == null){
          source = this.diagram.note_declarations.find(e => e.getName()  === connection.sourceElement) as Note;
        }
        if(source == null){
          let newCls = new Class(connection.sourceElement,'class');
          DiagramCreator.diagram[DiagramCreator.activeIndex].addClass(newCls);

          newCls.x = this.x;
          newCls.y = this.y;
          addedVertexes[newCls.alias] = this.graph.insertVertex(
            this.parentContainer,
            newCls.id,
            newCls,
            newCls.x,
            newCls.y,
            newCls.getWidth(),
            newCls.getHeight(),
          )
          this.index++;
          this.x = this.x + 400;
          newCls.registerObserver(connection as Connection);
        }
        source?.registerObserver(connection as Connection);

        let target: Class | Note;
        target = this.diagram.class_declarations.find(e => e.alias === connection.destinationElement) as Class;
        console.log(target);

        if(target == null){
          target = this.diagram.note_declarations.find(e => e.getName() === connection.destinationElement) as Note;
        }
        if(target == null){
          let newCls = new Class(connection.destinationElement,'class');
          DiagramCreator.diagram[DiagramCreator.activeIndex].addClass(newCls);

          newCls.x = this.x;
          newCls.y = this.y;
          addedVertexes[newCls.alias] = this.graph.insertVertex(
            this.parentContainer,
            newCls.id,
            newCls,
            newCls.x,
            newCls.y,
            newCls.getWidth(),
            newCls.getHeight(),
          )
          this.index++;
          this.x = this.x + 400;
          newCls.registerObserver(connection as Connection);
        }
        target?.registerObserver(connection as Connection);

        addedEdges['(' + connection.destinationElement + ',' + connection.sourceElement + ')'] = this.graph.insertEdge(
          this.parentContainer,
          connection.id,
          connection,
          addedVertexes[connection.sourceElement],
          addedVertexes[connection.destinationElement],
          EdgeStyleCreator.getStyle(connection.connector)
        );

        
        //Restore Points of Connection
        if(connection.points != null){
          let points: any[] = [];
          for (let index = 0; index < connection.points.length; index++) {
            const point = connection.points[index];
            points.push(new mxPoint(point.x,point.y));
            
          }
          addedEdges['(' + connection.destinationElement + ',' + connection.sourceElement + ')']
          .geometry.points = points;
        }
        
      }

      //Add Left multiplicity to Connection
      var e21 = this.graph.insertVertex(addedEdges['(' + connection.destinationElement + ',' + connection.sourceElement + ')'], connection.id + 'L', connection.multiplicity_left, -0.9, 0, 0, 0,
              'fontSize=14;fontColor=#000000;fillColor=#ffffff;strokeOpacity=0;fillOpacity=0;strokeWidth=0;', true);        
      this.graph.updateCellSize(e21);
      connection.multiplicity_left.vertex = e21;
      e21.isConnectable = () => false;

      //Add right multiplicity to Connection
      var e12 = this.graph.insertVertex(addedEdges['(' + connection.destinationElement + ',' + connection.sourceElement + ')'], null, connection.multiplicity_right, 0.9, 0, 0, 0,
              'fontSize=14;fontColor=#000000;fillColor=#ffffff;strokeOpacity=0;fillOpacity=0;strokeWidth=0;', true);
      this.graph.updateCellSize(e12);
      connection.multiplicity_right.vertex = e12;
      e12.isConnectable = () => false;
            
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
