import IName from './named';
import ID from './id';


export default interface Attribute extends IName, ID{
    dataType: string,
    visibility: string,

    setVisibility(newVisibility: string): void;
    setDataType(newDataType: string): void;

    getWidth(): number;
}