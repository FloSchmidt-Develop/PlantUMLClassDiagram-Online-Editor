import Itype from '../../interfaces/typed'


export default class Multiplicity implements Itype{
    public readonly type: string;
    public readonly isLeft: boolean;
    public value: string;

    public vertex: any;
    
    /**
     *
     */
    constructor(value: string, isLeft: boolean) {
        this.value = value === 'none' ? '' : value;
        this.isLeft = isLeft;
        this.type = 'Multiplicity';   
    }
}