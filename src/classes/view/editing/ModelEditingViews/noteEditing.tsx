import Note from "../../../parserRep/note";
import DiagramCreator from "../../../../helper/diagramCreator";
import ElementUpdateController from "../../../controller/elementUpdateController";

export default class NoteEditingView{

    public static CreateNoteEditingView(selectedNote: Note, sender: any, graph: any, view: HTMLDivElement): HTMLDivElement{
        let table = document.createElement("table");
        
        
        //---------------------Alias
        let tr1 = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let p = document.createElement("p");
    
        p.innerHTML = "Alias: ";
        td1.appendChild(p);

        let input1 = document.createElement("input");
        input1.type = "text";
        input1.value = selectedNote.getName();

        input1.onchange = () => {
            var elementToChange = selectedNote;
            if (elementToChange !== null) {
            if(NoteEditingView.validateName(input1.value)){
            alert('Alias shouldn´t contain special Characters');
            return;
            }
            if(selectedNote instanceof Note && DiagramCreator.diagram[DiagramCreator.activeIndex]
            .note_declarations.find(e => e.getName() === input1.value)){
            alert('Note Alias: ' + input1.value + ' should be unique');
            return;
            }
            //Check for unique name
            let newNote = (elementToChange as Note).cloneModel();
            newNote.setName(input1.value);
              
            graph.getModel().beginUpdate();
      
              
            ElementUpdateController.updateElement(graph,sender.cells[0],newNote);
              
            graph.getModel().endUpdate();
              
        }
        

    }

        let tr2 = document.createElement("tr");
        let td21 = document.createElement("td");
        let td22 = document.createElement("td");
        let p2 = document.createElement("p");
    
        p2.innerHTML = "Note: ";
        td21.appendChild(p2);

        let input2 = document.createElement("textarea");
        input2.rows = 4;
        input2.cols = 50;
        input2.value = selectedNote.content;

        input2.onchange = () => {
            var elementToChange = selectedNote;
            if (elementToChange !== null) {

                let newNote = (elementToChange as Note).cloneModel();
                newNote.content = input2.value.replace('\\n','<br>');
                
                graph.getModel().beginUpdate();
        
                
                ElementUpdateController.updateElement(graph,sender.cells[0],newNote);
                
                graph.getModel().endUpdate();
              
        }
        

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

    return view;

}
public static validateName(name: string): boolean{
    var format = /[ `!@#$%^&*()+\-=\[\]{};':"\\|,.<>\/?~]/;
    return format.test(name);
  }
}