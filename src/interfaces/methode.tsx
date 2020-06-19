import IAttribute from './attribute'
import IName from './named';


export default interface Methode extends IName{
    name: string,
    dataType: string,
    attributeList?: IAttribute[],
    visibility: string,
    getAttributeListAsString() : string,

    getWidth(): number;

    setName(newName : string);
    setVisibility(newVisibility: string);
    setDataType(newDatatype: string);
}