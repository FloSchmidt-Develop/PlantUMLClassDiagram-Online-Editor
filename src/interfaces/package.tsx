import IClass from './class';
import ITyped from './typed';
import IName from './named';


export default interface Package extends ITyped, IName{

    ClassReferences: IClass[];
    
    AddClassReference(classToAdd : IClass): void;
}