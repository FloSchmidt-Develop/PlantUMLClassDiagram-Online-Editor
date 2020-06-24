import IConnector from './connector'
import ITyped from './typed';
import ID from './id';

export default interface Connection extends ITyped, ID{
    connector: IConnector,
    multiplicity_left: string,
    multiplicity_right: string,
    destinationElement: string;
    sourceElement: string;
    stereoType: string;

    setConnector(connector: string)
    setStereoType(stereoType: string)
    setStartMultiplicity(multiplicity: string)
}