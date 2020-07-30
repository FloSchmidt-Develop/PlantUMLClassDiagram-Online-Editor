import IType from '../../interfaces/typed';
import IMultiplicity from '../../interfaces/multiplicity'


export default class Multiplicity implements IMultiplicity, IType{
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

    public cloneModel(): Multiplicity{
        let newMultiplicity = new Multiplicity(this.value,this.isLeft);
        newMultiplicity.vertex = this.vertex;
        return newMultiplicity;
    }
}