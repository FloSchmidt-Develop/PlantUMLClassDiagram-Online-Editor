import ID from './id';
import { Modifiers, Visibility } from '../../interfaces/class';
import Clonable from '../../interfaces/cloneable';
import Attribute from './attribute';

export default class Method extends ID implements Clonable{
    private name: string;
    dataType: string = '';
    attributeList: Attribute[] = [];
    modifiers: Modifiers;
    visibility: Visibility;

    constructor(name :string, visibility : Visibility, modifiers: Modifiers ){
        super();
        this.name = name;
        this.visibility = visibility;
        this.modifiers = modifiers;
    }

    getAttributeListAsString(): string {
        var result = "(";
        for (let index = 0; index < this.attributeList.length; index++) {
            const element = this.attributeList[index];
            result += element.getName() + ": " + element.dataType + (index < this.attributeList.length -1 ? ',' : '')
            
        }
        result += ")"
        return result;
    }

    public DeleteAttribute(attribute: Attribute){
        this.attributeList = this.attributeList.filter(e => e.id != attribute.id)
    }

    public setName(newName : string){
        this.name = newName;
    }

    public getName(): string{
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
        return ((this.name.length + this.dataType.length  +  1 + this.getAttributeListAsString().length) * 10 )* 0.60;
    }

    public cloneModel(): Method{
        let newMethode = new Method(this.name,this.visibility,this.modifiers);
        newMethode.setDataType(this.dataType);
        for (let index = 0; index < this.attributeList.length; index++) {
            const oldAttribute = this.attributeList[index];
            let newAttribute = oldAttribute.cloneModel();
            newMethode.attributeList.push(newAttribute);
        }
        newMethode.id = this.id;
        return newMethode;
    }
}