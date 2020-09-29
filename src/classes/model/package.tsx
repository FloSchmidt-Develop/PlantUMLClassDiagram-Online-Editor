import ID from './id';
import DiagramCreator from '../../helper/diagramCreator';
import Note from './note';
import Clonable from '../../interfaces/cloneable';
import Typed from '../../interfaces/typed';
import Class from './class';


export default class Package extends ID implements Clonable, Typed{
    y: number = 0;
    x: number = 0;
    private width: number = 50;
    private hight: number = 400;
    private name: string;
    public classReferences: Class[] = [];
    public packageReferences: Package[] = [];
    public noteReferences: Note[] = [];
    public package = '';
    public readonly type = 'Package';


    setWidth(width: number) {
        console.log('setWidth');
        console.log(width);
        
        
        if(width != null)
            this.width = width;
    }
    setHight(hight: number) {
        console.log('setHight');
        console.log(hight);
        if(hight != null)
            this.hight = hight;
    }

    getWidth(): number {
        return this.width;
      }
    getHight():number {
        return this.hight;
      }



    constructor(packageName: string) {
        super();
        this.name = packageName;
    }

    public setName(name: string){
        this.name = name;
        for (let index = 0; index < this.classReferences.length; index++) {
            this.classReferences[index].package = this.name;
        }
        for (let index = 0; index < this.packageReferences.length; index++) {
            this.packageReferences[index].package = this.name;
        }
    }

    public getName(): string{
        return this.name;
    }

    public AddClassReference(classToAdd : Class){

        
        if(this.classReferences.find(e => e.id === classToAdd.id) == null){
            this.classReferences.push(classToAdd);
        }
        classToAdd.package = this.name;     
    }

    public RemoveClassReference(classToRemove: Class, keepName: boolean = false){
        console.log('Remove Klass: ' + classToRemove.getName());
        this.classReferences = this.classReferences.filter(e => e.id !== classToRemove.id);
        if(keepName == null || keepName === false){
            classToRemove.package = '';
        }

    }

    public AddNoteReference(noteToAdd : Note){
        if(this.noteReferences.find(e => e.id === noteToAdd.id) == null){
            this.noteReferences.push(noteToAdd);
        }
        noteToAdd.package = this.name;
        
    }

    public RemoveNoteReferences(noteToRemove: Note, keepName: boolean = false){
        this.noteReferences = this.noteReferences.filter(e => e.id !== noteToRemove.id);
        if(keepName == null || keepName === false){
            noteToRemove.package = '';
        }

    }

    public AddPackageReference(packageToAd : Package){
        if(this.packageReferences.find(e => e.id === packageToAd.id) != null){
            return;
        }
        packageToAd.package = this.name;
        this.packageReferences.push(packageToAd);
    }

    public RemovePackageReferences(packageToRemove: Package, keepName: boolean = false){
        this.packageReferences = this.packageReferences.filter(e => e.id !== packageToRemove.id);
        if(!keepName)
            packageToRemove.package = '';
    }

    public cloneModel(): Package{
        let newPackage = new Package(this.name); 
        newPackage.x = this.x;
        newPackage.y = this.y;
        newPackage.setWidth(this.width);
        newPackage.setHight(this.hight);
        newPackage.classReferences = [...this.classReferences];
        newPackage.packageReferences = [...this.packageReferences];
        if(this.package !== ''){
            let parentPackage = DiagramCreator.diagram[DiagramCreator.activeIndex].package_declarations.find(e => e.getName() === this.package);
            parentPackage?.RemovePackageReferences(this,true);
            parentPackage?.AddPackageReference(newPackage);
        }
        return newPackage;

    }

}