import Connection from "../../model/connection";
import EdgeStyleCreator from "../../view/cellLables/edgeStyle";
import { Lines, Arrows } from "../../../interfaces/connector";
import ElementUpdateController from "../elementUpdateController";

export default class ConnectionController{
    selectedConnection: Connection;
    cell: any;
    graph: any;

    constructor(selectedConnection: Connection, cell: any, graph: any) {
        this.selectedConnection = selectedConnection;
        this.cell = cell;
        this.graph = graph;
    }

    public updateLineLabel(label: string){
        let newConnection = this.cloneConnection(this.selectedConnection);
        newConnection.setStereoType(label);
        this.UpdateGraphEdge(newConnection);
    }

    public updateLineStyle(lineIndex: number){
        let newConnection = this.cloneConnection(this.selectedConnection);
        if (lineIndex === 1 )
        newConnection.connector.setLineStyle_direct(Lines.normal);
        else if(lineIndex === 0)
        newConnection.connector.setLineStyle_direct(Lines.dotted);
        this.UpdateGraphEdge(newConnection);
    }

    public updateStartArrow(arrowIndex: number){
        let newConnection = this.cloneConnection(this.selectedConnection);
        switch(arrowIndex){
            case 0:
              newConnection.connector.setStartConnector_direct(Arrows.normal);
              break;
            case 1:
              newConnection.connector.setStartConnector_direct(Arrows.diamond);
              break;
            case 2:
              newConnection.connector.setStartConnector_direct(Arrows.diamondFilled);
              break;
            case 3:
              newConnection.connector.setStartConnector_direct(Arrows.big);
              break;
            case 4:
              newConnection.connector.setStartConnector_direct(Arrows.none);
              break;
            default:
              newConnection.connector.setStartConnector_direct(Arrows.none);
              break;
          }
          this.UpdateGraphEdge(newConnection);
    }

    public updateEndArrow(arrowIndex: number){
        let newConnection = this.cloneConnection(this.selectedConnection);
        switch(arrowIndex){
            case 0:
              newConnection.connector.setEndConnector_direct(Arrows.normal);
              break;
            case 1:
              newConnection.connector.setEndConnector_direct(Arrows.diamond);
              break;
            case 2:
              newConnection.connector.setEndConnector_direct(Arrows.diamondFilled);
              break;
            case 3:
              newConnection.connector.setEndConnector_direct(Arrows.big);
              break;
            case 4:
              newConnection.connector.setEndConnector_direct(Arrows.none);
              break;
            default:
              newConnection.connector.setEndConnector_direct(Arrows.none);
              break;
          }
          this.UpdateGraphEdge(newConnection);
    }

    public updateStartMultiplicity(multiplicity: string){
        let newConnection = this.cloneConnection(this.selectedConnection);
        newConnection.setStartMultiplicity(multiplicity);
        this.UpdateGraphEdge(newConnection);
    }

    public updateEndMultiplicity(multiplicity: string){
        let newConnection = this.cloneConnection(this.selectedConnection);
        newConnection.setEndMultiplicity(multiplicity);
        this.UpdateGraphEdge(newConnection);
    }


    private cloneConnection(connection: Connection, sourceElement?: string, destinationElement?: string): Connection{

        if(sourceElement == null)
            sourceElement = this.selectedConnection.sourceElement;
        if(destinationElement == null)
            destinationElement = this.selectedConnection.destinationElement;

        return connection.cloneModel(sourceElement,destinationElement);
    }

    private UpdateGraphEdge(connectionToChange: Connection){
        var vertexL = connectionToChange.multiplicity_left.vertex;
        var vertexR = connectionToChange.multiplicity_right.vertex;
    
        ElementUpdateController.updateElement(this.graph,vertexL,connectionToChange.multiplicity_left);
        ElementUpdateController.updateElement(this.graph,vertexR,connectionToChange.multiplicity_right);
        
        ElementUpdateController.updateElement(this.graph,this.cell,connectionToChange);
    
        this.graph.model.setStyle(this.cell, EdgeStyleCreator.getStyle(connectionToChange.connector));
      }
}