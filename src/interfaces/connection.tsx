import IConnector from './connector'
import ITyped from './typed';
import ID from './id';
import IMultiplicity from './multiplicity'

export default interface Connection extends ITyped, ID{

    connector: IConnector,
    multiplicity_left: IMultiplicity;
    multiplicity_right: IMultiplicity;
    destinationElement: string;
    sourceElement: string;
    stereoType: string;

    setConnector(connector: string);
    setStereoType(stereoType: string);
    setStartMultiplicity(multiplicity: string);
    setEndMultiplicity(value: string);
}