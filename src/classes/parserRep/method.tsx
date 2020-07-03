import IMethod from '../../interfaces/methode';
import IAttribute from '../../interfaces/attribute';
import ID from './id';

export default class Method extends ID implements IMethod{
    private name: string;
    dataType: string = '';
    attributeList: IAttribute[] = [];
    visibility: string;

    constructor(name :string, visibility : string ){
        super();
        this.name = name;
        this.visibility = (visibility === 'undefined') ? '' : visibility;
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

    public DeleteAttribute(attribute: IAttribute){
        this.attributeList = this.attributeList.filter(e => e.id != attribute.id)
    }

    public setName(newName : string){
        this.name = newName;
    }

    public getName(): string{
        return this.name;
    }

    public setVisibility(newVisibility: string){
        this.visibility = newVisibility;
    }
    
    public setDataType(newDatatype: string){
        this.dataType = newDatatype;
    }

    public getWidth(): number{        
        return ((this.name.length + this.dataType.length + this.visibility?.length +  2 + this.getAttributeListAsString().length) * 10 )* 0.60;
    }
}