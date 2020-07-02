import IClass from './class';
import IConnection from './connection';
import IPackage from './package';
import ID from './id';


export default interface Diagram extends ID {

    class_declarations: IClass[];
    connection_declarations: IConnection[];
    package_declarations : IPackage [];

    addClass(newClass : IClass);
    addConnection(newConnection: IConnection);
    addPackage(packageName: string);

    removeClass(classToRemove: IClass);
    removeConnection(connectionToRemove: IConnection);
    removePackage(packageToRemove: IPackage);

}