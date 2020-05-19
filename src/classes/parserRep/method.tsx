import IMethod from '../../interfaces/methode';
import IAttribute from '../../interfaces/attribute';

export default class Method implements IMethod{
    name: string;
    dataType: string = '';
    attributeList: IAttribute[] = [];
    visibility: string;

    constructor(name :string, visibility : string ){
        this.name = name;
        this.visibility = visibility;
    }

    getAttributeListAsString(): string {
        var result = "(";
        for (let index = 0; index < this.attributeList.length; index++) {
            const element = this.attributeList[index];
            result += element.name + ": " + element.dataType + (index < this.attributeList.length -1 ? ',' : '')
            
        }
        result += ")"
        return result;
    }
}