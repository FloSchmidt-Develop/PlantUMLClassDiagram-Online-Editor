
import DiagramCreator from "../../../../helper/diagramCreator";
import Package from "../../../model/package";
import Connection from "../../../model/connection";
import Class from "../../../model/class";

export default class ConnectionChangeController{

    public static ChangeConnection(change: any, connectionThatChange: Connection){

        if(change.parent === null){
            let connectedClasses = DiagramCreator.diagram[DiagramCreator.activeIndex]
            .class_declarations.filter(e => e.getName() === connectionThatChange.destinationElement 
            || e.getName() === connectionThatChange.sourceElement );
        connectedClasses.forEach(e => (e as Class).removeObserver(connectionThatChange));
            DiagramCreator.diagram[DiagramCreator.activeIndex].removeConnection(connectionThatChange);
        }

        else if(typeof change.parent.value === 'undefined' || change.parent.value instanceof Package ){
            if(change.previous === null){
                DiagramCreator.diagram[DiagramCreator.activeIndex].addConnection(connectionThatChange);
            }
        }
    }
}