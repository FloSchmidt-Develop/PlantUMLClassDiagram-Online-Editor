import Connection from "../../../../interfaces/connection";
import DiagramCreator from "../../../../helper/diagramCreator";
import Package from "../../../parserRep/package";

export default class ConnectionChangeController{

    public static ChangeConnection(change: any, connectionThatChange: Connection){

        if(change.parent === null){
            DiagramCreator.diagram[DiagramCreator.activeIndex].removeConnection(connectionThatChange);
        }

        else if(typeof change.parent.value === 'undefined' || change.parent.value instanceof Package ){
            if(change.previous === null){
                DiagramCreator.diagram[DiagramCreator.activeIndex].addConnection(connectionThatChange);
            }
        }
    }
}