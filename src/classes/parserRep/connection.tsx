import IConnection from '../../interfaces/connection';
import IConnector from '../../interfaces/connector';
import Connector from './connector';
import Multiplicity from './multiplicity';
import ID from './id';

export default class Connection extends ID implements IConnection{
    public connector: IConnector;
    public multiplicity_left: Multiplicity;
    public multiplicity_right: Multiplicity;
    public destinationElement: string;
    public sourceElement: string;
    public stereoType: string;
    public readonly type = 'Connection';
    geometry: any;

    constructor(connector: string,
        multiplicity_left: string,
        multiplicity_right: string,
        destinationElement: string,
        sourceElement: string,
        stereoType: string) {

            super();
            this.connector = new Connector(connector);
            this.multiplicity_left = new Multiplicity(multiplicity_left,true);
            this.multiplicity_right = new Multiplicity(multiplicity_right,false)
            this.destinationElement = destinationElement;
            this.sourceElement = sourceElement;
            this.stereoType = stereoType ? stereoType : '';
        
    }
    public setStartMultiplicity(multiplicity: string) {
        this.multiplicity_left.value = multiplicity;
    }

    public setEndMultiplicity(multiplicity: string) {
        this.multiplicity_right.value = multiplicity;
    }

    public setConnector(connector: string){
        this.connector.resetConnections(connector);
    }

    public setStereoType(stereoType: string){
        this.stereoType = stereoType;
    }
}