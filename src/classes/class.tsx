import IClass from '../interfaces/class'
import IAttribute from '../interfaces/attribute'
import IMethode from '../interfaces/methode'


export default class Class implements IClass{
    public attributes: IAttribute[] = [];
    public methodes: IMethode[] = [];
    public name: string;
    public package: string = '';
    public type: string;
    public alias: string = '';

    constructor(name: string, type: string){
        this.name = name;
        this.type = type;
    }

}