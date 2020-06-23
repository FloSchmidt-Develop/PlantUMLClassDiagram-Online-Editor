import IClass from './class';
import IConnection from './connection';
import IPackage from './package';


export default interface Diagram {

    class_declarations: IClass[];
    connection_declarations: IConnection[];
    package_declarations : IPackage [];

    addClass(newClass : IClass);
    addConnection(newConnection: IConnection);
    addPackage(packageName: string);

}