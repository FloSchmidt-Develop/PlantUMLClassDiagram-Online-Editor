import Named from "../../interfaces/named";

export default class NameChanger{
    name: string;
    namedObject: Named;
    previous: string;
    /**
     *
     */
    constructor(namedObject: Named, name: string) {
        this.namedObject = namedObject;
        this.name = name;
        this.previous = name;
        
    }

    public execute(){
        var temp = this.namedObject.getName();
        this.namedObject.setName(this.previous);
        this.previous = temp;
    }
}