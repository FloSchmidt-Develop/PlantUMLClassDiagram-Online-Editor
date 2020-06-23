import IConnector from './connector'
import ITyped from './typed';

export default interface Connection extends ITyped{
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