import IAttribute from './attribute'
import IName from './named';
import ID from './id';
import { Modifiers, Visibility } from './class';


export default interface Method extends IName, ID{
    dataType: string,
    attributeList?: IAttribute[],
    visibility: Visibility,
    modifiers: Modifiers,
    getAttributeListAsString() : string,

    getWidth(): number;

    setName(newName : string);
    setVisibility(newVisibility: Visibility);
    setModifier(newModifier: Modifiers);
    setDataType(newDatatype: string);
    DeleteAttribute(attribute: IAttribute);
    cloneModel(): Method;
}