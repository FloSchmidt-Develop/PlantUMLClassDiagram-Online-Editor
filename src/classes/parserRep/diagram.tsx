import IDiagram from '../../interfaces/diagram';
import IClass from '../../interfaces/class';
import IConnection from '../../interfaces/connection';

export default class Diagram implements IDiagram{
    public class_declarations: IClass[] = [];
    public connection_declarations : IConnection[] = [];

    public addClass(newClass : IClass) :void{
        this.class_declarations.push(newClass);
    }

    public addConnection(newConnection : IConnection): void{
        this.connection_declarations.push(newConnection);
    }

}