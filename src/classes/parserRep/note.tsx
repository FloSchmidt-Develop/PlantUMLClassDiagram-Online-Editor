import ID from "./id";
import ObserverSubject from "./subject";

export default class Note extends ObserverSubject<string>{
    content: string;
    direction: string = '';
    relatedTo: string = '';
    private name: string = '';
    public x: number = 0;
    public y: number = 0;
    private width = 0;
    private hight = 0;
    readonly type: string = 'Note';
    
    
    constructor(content: string) {
        super();
        this.content = content ? content : '' ;
        this.name = this.id.slice(0,5);
    }

    public getName(): string{
        return this.name;
    }

    public setName(name: string){
        this.NotifyObservers(this.name,name);
        this.name = name;
    }

    public setWidth(width: number){
        this.width = width;
    }

    public setHight(hight: number){
        this.hight = hight;
    }

    public getWidth(): number{
        if(this.width >  this.content.length * 6)
            return this.width;
        return this.content.length * 6;
    }

    public getHight(): number{
        if(this.hight > 30)
            return this.hight;
        return 30;
    }

    public cloneModel(): Note{
        let newNote = new Note(this.content);
        newNote.id = this.id;
        newNote.direction = this.direction;
        newNote.relatedTo = this.relatedTo;
        newNote.name = this.name;
        newNote.x = this.x;
        newNote.y = this.y;
        newNote.observers = this.observers;
        return newNote;
    }




}