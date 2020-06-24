import IClass from '../../interfaces/class';
import IPackage from '../../interfaces/package';
import ID from './id';


export default class Package extends ID implements IPackage{

    public name: string;
    public  ClassReferences: IClass[] = [];
    public readonly type = 'Package';

    constructor(packageName: string) {
        super();
        this.name = packageName;
    }

    public setName(name: string){
        this.name = name;
    }

    public AddClassReference(classToAdd : IClass){
        if(this.ClassReferences.find(e => e.name === classToAdd.name) != null){
            return;
        }
        this.ClassReferences.push(classToAdd);
    }

}