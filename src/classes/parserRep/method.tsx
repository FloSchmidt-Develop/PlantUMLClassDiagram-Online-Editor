import IMethod from '../../interfaces/methode';
import IAttribute from '../../interfaces/attribute';

export default class Method implements IMethod{
    name: string;
    dataType: string = '';
    attributeList: IAttribute[] = [];
    visibility: string;

    constructor(name :string, visibility : string ){
        this.name = name;
        this.visibility = (visibility === 'undefined') ? '' : visibility;
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

    private getWidthOfAttributeList(): number{
        let width = 0;
        for (let index = 0; index < this.attributeList.length; index++) {
            const attribute = this.attributeList[index];
            width += attribute.getWidth();
            
        }
        return width;
    }

    public getWidth(): number{
        return (this.name.length + this.dataType.length + this.visibility?.length +  2 + this.getAttributeListAsString().length) * 10 
    }
}