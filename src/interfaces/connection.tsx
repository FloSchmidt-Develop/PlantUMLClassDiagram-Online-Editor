import IConnector from './connector'
import ITyped from './typed';
import ID from './id';
import IMultiplicity from './multiplicity'
import Point from '../classes/parserRep/point';

export default interface Connection extends ITyped, ID{

    connector: IConnector,
    multiplicity_left: IMultiplicity;
    multiplicity_right: IMultiplicity;
    destinationElement: string;
    sourceElement: string;
    stereoType: string;
    points: Point[];

    setConnector(connector: string);
    setStereoType(stereoType: string);
    setStartMultiplicity(multiplicity: string);
    setEndMultiplicity(value: string);
    cloneModel(newSourceElement: string, newDestinationElement: string): Connection;
}