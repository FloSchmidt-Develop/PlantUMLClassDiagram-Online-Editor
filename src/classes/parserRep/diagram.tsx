import IDiagram from '../../interfaces/diagram';
import IClass from '../../interfaces/class';
import IConnection from '../../interfaces/connection';
import IPackage from '../../interfaces/package';
import Package from './package';

export default class Diagram implements IDiagram{
    public class_declarations: IClass[] = [];
    public connection_declarations : IConnection[] = [];
    public package_declarations : IPackage [] = [];

    public addClass(newClass : IClass) :void{
        this.class_declarations.push(newClass);
    }

    public addConnection(newConnection : IConnection): void{
        this.connection_declarations.push(newConnection);
    }

    public addPackage(packageName: string): IPackage | null{
        if(packageName === '')
            return null;
        let newPackage = this.package_declarations.find(e => e.Name === packageName)
        if(newPackage != null){
            return newPackage
        }
        newPackage = new Package(packageName)
        this.package_declarations.push(newPackage);
        return newPackage;
    }

}