import IClass from '../../interfaces/class';
import IPackage from '../../interfaces/package';


export default class Package implements IPackage{

    public readonly Name: string;
    public  ClassReferences: IClass[] = [];

    constructor(packageName: string) {
        this.Name = packageName;
    }

    public AddClassReference(classToAdd : IClass){
        if(this.ClassReferences.find(e => e.name === classToAdd.name) != null){
            return;
        }
        this.ClassReferences.push(classToAdd);
    }

}