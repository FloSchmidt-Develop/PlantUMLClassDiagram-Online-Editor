import IAttribute from '../../interfaces/attribute'
import IName from '../../interfaces/named'
import ID from './id';


export default class Attribute extends ID implements IName, IAttribute {
    private name: string;
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

    public getName():string{
        return this.name;
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

    public cloneModel(): IAttribute{
        let newAttribute = new Attribute(this.name,this.dataType,this.visibility);
        return newAttribute;
    }
}