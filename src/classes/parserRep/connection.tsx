import IConnection from '../../interfaces/connection';
import IConnector from '../../interfaces/connector';
import Connector from './connector';
import ID from './id';

export default class Connection extends ID implements IConnection{
    public connector: IConnector;
    public multiplicity_left: string;
    public multiplicity_right: string;
    public destinationElement: string;
    public sourceElement: string;
    public stereoType: string;
    public readonly type = 'Connection';

    constructor(connector: string,
        multiplicity_left: string,
        multiplicity_right: string,
        destinationElement: string,
        sourceElement: string,
        stereoType: string) {

            super();
            this.connector = new Connector(connector);
            this.multiplicity_left = multiplicity_left;
            this.multiplicity_right = multiplicity_right;
            this.destinationElement = destinationElement;
            this.sourceElement = sourceElement;
            this.stereoType = stereoType;
        
    }
    public setStartMultiplicity(multiplicity: string) {
        this.multiplicity_right = multiplicity;
    }

    public setConnector(connector: string){
        this.connector.resetConnections(connector);
    }

    public setStereoType(stereoType: string){
        this.stereoType = stereoType;
    }
}