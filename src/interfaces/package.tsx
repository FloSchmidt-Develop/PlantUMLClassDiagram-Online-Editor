import IClass from './class' 


export default interface Package{

    readonly Name: string;
    ClassReferences: IClass[];
    
    AddClassReference(classToAdd : IClass): void;
}