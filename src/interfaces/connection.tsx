export default interface Connection{
    connector: string,
    multiplicity_left: string,
    multiplicity_right: string,
    leftElement: string,
    rightElement: string,
    stereoType: string;

    setConnector(connector: string)
}