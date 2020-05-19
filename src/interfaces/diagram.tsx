import IClass from './class'


export default interface Diagram{
    class_declarations: IClass[],
    addClass(newClass : IClass) :void,
}