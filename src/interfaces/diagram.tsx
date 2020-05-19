import IClass from './class'
import IConnection from './connection'


export default interface Diagram{
    class_declarations: IClass[],
    connection_declarations: IConnection[],

    addClass(newClass : IClass) :void,
    addConnection(newConnection: IConnection): void,
}