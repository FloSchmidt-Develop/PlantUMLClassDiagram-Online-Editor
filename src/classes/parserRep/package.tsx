import IClass from '../../interfaces/class';
import IPackage from '../../interfaces/package';
import ID from './id';


export default class Package extends ID implements IPackage{

    private name: string;
    public  classReferences: IClass[] = [];
    public readonly type = 'Package';

    constructor(packageName: string) {
        super();
        this.name = packageName;
    }

    public setName(name: string){
        this.name = name;
        for (let index = 0; index < this.classReferences.length; index++) {
            this.classReferences[index].package = this.name;
        }
    }

    public getName(): string{
        return this.name;
    }

    public AddClassReference(classToAdd : IClass){
        if(this.classReferences.find(e => e.id === classToAdd.id) != null){
            return;
        }
        classToAdd.package = this.name;
        this.classReferences.push(classToAdd);
    }

    public RemoveClassReference(classToRemove: IClass){
        this.classReferences = this.classReferences.filter(e => e.id !== classToRemove.id);
        classToRemove.package = '';
    }

}