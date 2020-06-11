import IConnection from '../../interfaces/connection'

export default class Connection implements IConnection{
    public connector: string;
    public multiplicity_left: string;
    public multiplicity_right: string;
    public leftElement: string;
    public rightElement: string;
    public stereoType: string;

    constructor(connector: string,
        multiplicity_left: string,
        multiplicity_right: string,
        leftElement: string,
        rightElement: string,
        stereoType: string) {

            this.connector = connector;
            this.multiplicity_left = multiplicity_left;
            this.multiplicity_right = multiplicity_right;
            this.leftElement = leftElement;
            this.rightElement = rightElement;
            this.stereoType = stereoType;
        
    }


    public setConnector(connector: string){
        this.connector = connector;
    }
}