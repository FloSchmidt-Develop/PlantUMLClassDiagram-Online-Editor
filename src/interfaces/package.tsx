import IClass from './class';
import ITyped from './typed';
import IName from './named';
import IPackage from './package';
import ID from './id';
import Note from '../classes/parserRep/note';


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
    RemoveClassReference(classToRemove: IClass, keepName?: boolean): void;
    AddPackageReference(packageToAd : IPackage): void;
    RemovePackageReferences(packageToRemove: IPackage, keepName?: boolean): void;
    AddNoteReference(noteToAdd : Note)
    RemoveNoteReferences(noteToRemove: Note, keepName: boolean)
    setName(name: string): void;
    cloneModel(): Package;
}