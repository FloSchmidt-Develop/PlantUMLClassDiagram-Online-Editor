import IName from './named';
import ID from './id';
import { Modifiers, Visibility } from './class';


export default interface Attribute extends IName, ID{
    dataType: string,
    visibility: Visibility,
    modifiers: Modifiers,

    setModifier(newModifier: Modifiers);
    setVisibility(newVisibility: Visibility): void;
    setDataType(newDataType: string): void;

    getWidth(): number;
    cloneModel(): Attribute;
}