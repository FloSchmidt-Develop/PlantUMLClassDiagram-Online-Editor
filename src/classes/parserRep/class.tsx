import IClass from '../../interfaces/class'
import IAttribute from '../../interfaces/attribute'
import IMethode from '../../interfaces/methode'
import IDeclaration from '../../interfaces/declaration'


export default class Class implements IClass{
    public attributes: IAttribute[] = [];
    public methodes: IMethode[] = [];
    public declarations: IDeclaration[] = [];
    public name: string;
    public package: string = '';
    public type: string;
    public alias: string = '';

    constructor(name: string, type: string){
        this.name = name;
        this.type = type;
    }

}