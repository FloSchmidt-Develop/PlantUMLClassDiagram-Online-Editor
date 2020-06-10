import IAttribute from '../interfaces/attribute'


export default interface Methode {
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