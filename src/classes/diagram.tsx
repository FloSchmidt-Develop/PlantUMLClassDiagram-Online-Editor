import IDiagram from '../interfaces/diagram';
import IClass from '../interfaces/class'

export default class Diagram implements IDiagram{
    public class_declarations: IClass[] = [];

    public addClass(newClass : IClass) :void{
        this.class_declarations.push(newClass);
    }

}