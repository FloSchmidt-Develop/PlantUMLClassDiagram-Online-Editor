import Note from "../../../parserRep/note";
import DiagramCreator from "../../../../helper/diagramCreator";

export default class NoteChangeController{
    public static ChangeNote(change: any, note: Note){
        if(change.parent === null ){

            DiagramCreator.diagram[DiagramCreator.activeIndex].removeNote(note);
        }

        else if(typeof change.parent.value === 'undefined'){
          
          if(change.previous === null){            
            DiagramCreator.diagram[DiagramCreator.activeIndex].addNote(note);
          }
        }
    }
}