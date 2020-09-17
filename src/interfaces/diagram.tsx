
import ID from './id';
import Note from '../classes/model/note';
import Class from '../classes/model/class';
import Connection from '../classes/model/connection';
import Package from '../classes/model/package';


export default interface Diagram extends ID {
    scale: number;
    name: string;
    class_declarations: Class[];
    connection_declarations: Connection[];
    package_declarations : Package [];
    note_declarations: Note [];

    addClass(newClass : Class);
    addConnection(newConnection: Connection);
    addPackage(NewPackage: Package);
    addNote(note: Note);

    removeClass(classToRemove: Class, keepConnections?: boolean);
    removeConnection(connectionToRemove: Connection);
    removePackage(packageToRemove: Package, removeClasses: boolean);
    removeNote(noteToRemove: Note);
}