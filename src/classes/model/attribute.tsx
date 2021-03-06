import IName from '../../interfaces/named'
import ID from './id';
import { Visibility, Modifiers } from '../../interfaces/class';


export default class Attribute extends ID implements IName {
    private name: string;
    public dataType: string;
    public visibility: Visibility;
    public modifiers: Modifiers;
    public defaultValue: string;

    constructor(name: string, dataType: string, visibility: Visibility, modifiers: Modifiers){
        super();
        this.name = name;
        this.dataType = dataType;        
        this.visibility = visibility
        this.modifiers = modifiers;
        this.defaultValue = '';
    }

    public setName(newName : string){
        this.name = newName;
    }

    public getName():string{
        return this.name;
    }

    public setModifier(newModifier: Modifiers){
        this.modifiers = newModifier;
    }

    public setVisibility(newVisibility: Visibility){
        this.visibility = newVisibility;
    }
    
    public setDataType(newDatatype: string){
        this.dataType = newDatatype;
    }

    public getWidth(): number{
        return ((this.name?.length + this.dataType?.length + 1 + 2) * 10);
    }

    public cloneModel(): Attribute{
        let newAttribute = new Attribute(this.name,this.dataType,this.visibility,this.modifiers);
        newAttribute.defaultValue = this.defaultValue;
        newAttribute.id = this.id;
        return newAttribute;
    }
}