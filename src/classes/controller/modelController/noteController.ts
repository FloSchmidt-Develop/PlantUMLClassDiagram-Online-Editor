import Note from "../../parserRep/note";
import ElementUpdateController from "../elementUpdateController";
import DiagramCreator from "../../../helper/diagramCreator";

export default class NoteController{
    noteToChange: Note;
    cell: any;
    graph: any;


    constructor(noteToChange: Note, cell: any, graph: any) {
        this.noteToChange = noteToChange;
        this.cell = cell;
        this.graph = graph;
    }

    public updateNoteName(name: string){
        if(this.validateName(name)){
            alert('Alias shouldn´t contain special Characters');
            return;
        }
        if(DiagramCreator.diagram[DiagramCreator.activeIndex].note_declarations.find(e => e.getName() === name)){
            alert('Note Alias: ' + name + ' should be unique');
            return;
        }
            //Check for unique name
        let newNote = this.cloneModel(this.noteToChange);
        newNote.setName(name);
        this.updateGraphElement(newNote);
    }

    public updateNoteContent(value: string){
        let newNote = this.cloneModel(this.noteToChange);
        newNote.content = value.replace('\\n','<br>');
        this.updateGraphElement(newNote);
    }

    private cloneModel(elementToClone: Note): Note{
        return elementToClone.cloneModel();
    }

    private updateGraphElement(newNote){
        this.graph.getModel().beginUpdate();
        ElementUpdateController.updateElement(this.graph, this.cell, newNote);
        this.graph.getModel().endUpdate();
    }

    private validateName(name: string): boolean{
        var format = /[ `!@#$%^&*()+\-=\[\]{};':"\\|,.<>\/?~]/;
        return format.test(name);
    }


}