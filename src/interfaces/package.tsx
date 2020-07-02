import IClass from './class';
import ITyped from './typed';
import IName from './named';
import ID from './id';


export default interface Package extends ITyped, IName, ID{

    classReferences: IClass[];
    
    AddClassReference(classToAdd : IClass): void;
    RemoveClassReference(classToRemove: IClass): void;
    setName(name: string): void;
}