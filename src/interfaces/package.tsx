import IClass from './class';
import ITyped from './typed';
import IName from './named';
import IPackage from './package';
import ID from './id';


export default interface Package extends ITyped, IName, ID{
    y: number;
    x: number;
    package: string;



    setWidth(width: number);
    setHight(hight: number);
    getWidth(): number;
    getHight():number;

    classReferences: IClass[];
    packageReferences: IPackage[];
    
    AddClassReference(classToAdd : IClass): void;
    RemoveClassReference(classToRemove: IClass): void;
    AddPackageReference(packageToAd : IPackage): void;
    RemovePackageReferences(packageToRemove: IPackage): void;
    setName(name: string): void;
    cloneModel(): Package;
}