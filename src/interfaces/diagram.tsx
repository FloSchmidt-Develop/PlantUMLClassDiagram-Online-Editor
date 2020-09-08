import IClass from './class';
import IConnection from './connection';
import IPackage from './package';
import ID from './id';
import Note from '../classes/parserRep/note';


export default interface Diagram extends ID {
    scale: number;
    name: string;
    class_declarations: IClass[];
    connection_declarations: IConnection[];
    package_declarations : IPackage [];
    note_declarations: Note [];

    addClass(newClass : IClass);
    addConnection(newConnection: IConnection);
    addPackage(NewPackage: IPackage);
    addNote(note: Note);

    removeClass(classToRemove: IClass, keepConnections?: boolean);
    removeConnection(connectionToRemove: IConnection);
    removePackage(packageToRemove: IPackage, removeClasses: boolean);
    removeNote(noteToRemove: Note);
}