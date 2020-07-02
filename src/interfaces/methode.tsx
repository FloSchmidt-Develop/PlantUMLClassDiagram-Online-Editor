import IAttribute from './attribute'
import IName from './named';
import ID from './id';


export default interface Methode extends IName, ID{
    dataType: string,
    attributeList?: IAttribute[],
    visibility: string,
    getAttributeListAsString() : string,

    getWidth(): number;

    setName(newName : string);
    setVisibility(newVisibility: string);
    setDataType(newDatatype: string);
    DeleteAttribute(attribute: IAttribute);
}