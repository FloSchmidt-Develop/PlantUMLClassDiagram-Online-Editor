import IConnector from './connector'

export default interface Connection{
    connector: IConnector,
    multiplicity_left: string,
    multiplicity_right: string,
    destinationElement: string;
    sourceElement: string;
    stereoType: string;

    setConnector(connector: string)
}