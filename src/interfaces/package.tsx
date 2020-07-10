import IClass from './class';
import ITyped from './typed';
import IName from './named';
import ID from './id';


export default interface Package extends ITyped, IName, ID{
    y: number;
    x: number;



    setWidth(width: number);
    setHight(hight: number);
    getWidth(): number;
    getHight():number;

    classReferences: IClass[];
    
    AddClassReference(classToAdd : IClass): void;
    RemoveClassReference(classToRemove: IClass): void;
    setName(name: string): void;
    cloneModel(): Package;
}