import Note from "../../../parserRep/note";
import DiagramCreator from "../../../../helper/diagramCreator";
import ElementUpdateController from "../../../controller/elementUpdateController";
import NoteController from "../../../controller/modelController/noteController";

export default class NoteEditingView{

    public static CreateNoteEditingView(selectedNote: Note, sender: any, graph: any, view: HTMLDivElement){
        let controller = new NoteController(selectedNote,sender.cells[0],graph);
        let table = document.createElement("table");
        
        
        //---------------------Alias
        let tr1 = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let p = document.createElement("p");
    
        p.innerHTML = "Name: ";
        td1.appendChild(p);

        let input1 = document.createElement("input");
        input1.type = "text";
        input1.value = selectedNote.getName();

        input1.onchange = () => {
            controller.updateNoteName(input1.value);  
        }

        let tr2 = document.createElement("tr");
        let td21 = document.createElement("td");
        let td22 = document.createElement("td");
        let p2 = document.createElement("p");
    
        p2.innerHTML = "Comment: ";
        td21.appendChild(p2);

        let input2 = document.createElement("textarea");
        input2.rows = 4;
        input2.cols = 40;
        input2.value = selectedNote.content;

        input2.onchange = () => {
            controller.updateNoteContent(input2.value);
        }

    td2.appendChild(input1);
    tr1.appendChild(td1);
    tr1.appendChild(td2);

    td22.appendChild(input2);
    tr2.appendChild(td21);
    tr2.appendChild(td22);

    table.appendChild(tr1);
    table.appendChild(tr2);
    view.appendChild(table);

}
public static validateName(name: string): boolean{
    var format = /[ `!@#$%^&*()+\-=\[\]{};':"\\|,.<>\/?~]/;
    return format.test(name);
  }
}