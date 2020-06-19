import IName from './named';


export default interface Attribute extends IName{
    dataType: string,
    visibility: string,

    setVisibility(newVisibility: string): void;
    setDataType(newDataType: string): void;

    getWidth(): number;
}