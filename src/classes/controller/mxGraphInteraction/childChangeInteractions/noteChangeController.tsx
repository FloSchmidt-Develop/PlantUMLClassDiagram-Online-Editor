import Note from "../../../parserRep/note";
import DiagramCreator from "../../../../helper/diagramCreator";
import Package from "../../../parserRep/package";

export default class NoteChangeController{
    public static ChangeNote(change: any, note: Note){

      if(change.parent === null ){

        DiagramCreator.diagram[DiagramCreator.activeIndex].removeNote(note);
    }

    else if(typeof change.parent.value === 'undefined'){
      
      if(change.previous === null){

        DiagramCreator.diagram[DiagramCreator.activeIndex].addNote(note);
      }
      else if(change.previous.value instanceof Package){
        let temp = change.previous.value as Package;

        temp.RemoveNoteReferences(note);
      }
    }

    else if(change.parent.value instanceof Package){
      let pakg = change.parent.value as Package;
      //#1: 3
      if(change.previous === null){

        
        DiagramCreator.diagram[DiagramCreator.activeIndex].addNote(note);
        pakg.AddNoteReference(note);
      }
      else if(typeof change.previous.value === 'undefined'){

        pakg.AddNoteReference(note);
      }
      else if(change.previous.value instanceof Package){

        let prev = change.previous.value as Package;
        prev.RemoveNoteReferences(note);
        pakg.AddNoteReference(note)
      }
    }
    }
}