import IClass from '../../interfaces/class';
import IPackage from '../../interfaces/package';


export default class Package implements IPackage{

    public name: string;
    public  ClassReferences: IClass[] = [];
    public readonly type = 'Package';

    constructor(packageName: string) {
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