import IDiagram from '../../interfaces/diagram';
import IClass from '../../interfaces/class';
import IConnection from '../../interfaces/connection';
import IPackage from '../../interfaces/package';
import Package from './package';
import ID from './id';

export default class Diagram extends ID implements IDiagram{
    public scale: number = 1;
    public name: string;
    public class_declarations: IClass[] = [];
    public connection_declarations : IConnection[] = [];
    public package_declarations : IPackage [] = [];

    constructor(name: string) {
        super();
        this.name = name;
    }

    public addClass(newClass : IClass) :void{
        if(this.class_declarations.find(e => e.id === newClass.id) == null)
            this.class_declarations.push(newClass);
    }

    public addConnection(newConnection : IConnection): void{
        
        if(this.connection_declarations.find(e => e.id === newConnection.id) == null){
            this.connection_declarations.push(newConnection);
        }
            
    }

    public addPackage(newPackage: IPackage): IPackage | null{
        if(newPackage.getName() === '')
            return null;
        let existingPackage = this.package_declarations.find(e => e.getName() === newPackage.getName())
        if(existingPackage != null){
            return existingPackage;
        }
        this.package_declarations.push(newPackage);
        return newPackage;
    }

    public removeClass(classToRemove: IClass){
        this.class_declarations = this.class_declarations.filter(
             e => e.id !== classToRemove.id);

        let connectionsToRemove = this.connection_declarations.filter(
            e => (e.destinationElement === classToRemove.alias || e.sourceElement === classToRemove.alias)
        );
        //Remove Connections from Classes
        for (let index = 0; index < connectionsToRemove.length; index++) {
            this.removeConnection(connectionsToRemove[index]);
        }
        let packageOfClass = this.package_declarations.find(e => e.getName() === classToRemove.package);
        packageOfClass?.RemoveClassReference(classToRemove);
    }

    public removeConnection(connectionToRemove: IConnection){
        this.connection_declarations = this.connection_declarations.filter(
            e => e.id !== connectionToRemove.id);

    }

    public removePackage(packageToRemove: IPackage, removeClasses: boolean){
        this.package_declarations = this.package_declarations.filter(
            e => e.id !== packageToRemove.id
        )
        if(removeClasses){
            packageToRemove.classReferences.forEach( e => this.removeClass(e));
        }


    }

}