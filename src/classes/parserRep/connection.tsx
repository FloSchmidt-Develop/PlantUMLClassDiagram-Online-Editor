import IConnection from '../../interfaces/connection'

export default class Connection implements IConnection{
    public connector: string;
    public multiplicity_left: string;
    public multiplicity_right: string;
    public leftElement: string;
    public rightElement: string;

    constructor(connector: string,
        multiplicity_left: string,
        multiplicity_right: string,
        leftElement: string,
        rightElement: string) {

            this.connector = connector;
            this.multiplicity_left = multiplicity_left;
            this.multiplicity_right = multiplicity_right;
            this.leftElement = leftElement;
            this.rightElement = rightElement;
        
    }
}