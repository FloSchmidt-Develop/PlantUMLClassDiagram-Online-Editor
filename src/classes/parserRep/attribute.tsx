import IAttribute from '../../interfaces/attribute'
import ID from './id';


export default class Attribute extends ID implements IAttribute {
    public name: string;
    public dataType: string;
    public visibility: string;

    constructor(name: string, dataType: string, visibility: string){
        super();
        this.name = name;
        this.dataType = dataType;        
        this.visibility = (typeof visibility === 'undefined') ? '' : visibility;
    }

    public setName(newName : string){
        this.name = newName;
    }

    public setVisibility(newVisibility: string){
        this.visibility = newVisibility;
    }
    
    public setDataType(newDatatype: string){
        this.dataType = newDatatype;
    }

    public getWidth(): number{
        return ((this.name.length + this.dataType.length + this.visibility?.length + 2) * 10);
    }
}