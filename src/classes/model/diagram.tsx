import IDiagram from '../../interfaces/diagram';
import Package from './package';
import ID from './id';
import Note from './note';
import Class from './class';
import Connection from './connection';

export default class Diagram extends ID implements IDiagram{
    public scale: number = 1;
    public name: string;
    public class_declarations: Class[] = [];
    public connection_declarations : Connection[] = [];
    public package_declarations : Package [] = [];
    public note_declarations: Note [] = [];

    constructor(name: string) {
        super();
        this.name = name;
    }

    public addClass(newClass : Class) :void{
        if(this.class_declarations.find(e => e.id === newClass.id) == null)
            this.class_declarations.push(newClass);
    }

    public addConnection(newConnection : Connection): void{
        
        if(this.connection_declarations.find(e => e.id === newConnection.id) == null){
            this.connection_declarations.push(newConnection);
        }
            
    }

    public addNote(note: Note){
        if(this.note_declarations.find(e => e.id === note.id) == null){
            this.note_declarations.push(note);
        }
    }

    public addPackage(newPackage: Package): Package | null{
        if(newPackage.getName() === '')
            return null;
        let existingPackage = this.package_declarations.find(e => e.getName() === newPackage.getName())
        if(existingPackage != null){
            return existingPackage;
        }
        this.package_declarations.push(newPackage);
        return newPackage;
    }

    public removeClass(classToRemove: Class, keepConnections: boolean = false){
        this.class_declarations = this.class_declarations.filter(
             e => e.id !== classToRemove.id);

        let connectionsToRemove = this.connection_declarations.filter(
            e => (e.destinationElement === classToRemove.alias || e.sourceElement === classToRemove.alias)
        );
        //Remove Connections from Classes
        for (let index = 0; index < connectionsToRemove.length; index++) {
            if(!keepConnections)
                this.removeConnection(connectionsToRemove[index]);
        }
        let packageOfClass = this.package_declarations.find(e => e.getName() === classToRemove.package);
        packageOfClass?.RemoveClassReference(classToRemove,true);
    }

    public removeConnection(connectionToRemove: Connection){
        console.log('remove Connection');
        
        this.connection_declarations = this.connection_declarations.filter(
            e => e.id !== connectionToRemove.id);

    }

    public removePackage(packageToRemove: Package, removeClasses: boolean){
        this.package_declarations = this.package_declarations.filter(
            e => e.id !== packageToRemove.id
        )
        if(removeClasses){
            packageToRemove.classReferences.forEach( e => this.removeClass(e));
        }
        let packageOfClass = this.package_declarations.find(e => e.getName() === packageToRemove.package);
        packageOfClass?.RemovePackageReferences(packageToRemove,true);


    }

    public removeNote(noteToRemove: Note){
        this.note_declarations = this.note_declarations.filter(
            e => e.id !== noteToRemove.id
        )
    }

}