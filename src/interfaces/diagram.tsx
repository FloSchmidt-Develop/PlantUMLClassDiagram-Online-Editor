
import ID from './id';
import Note from '../classes/parserRep/note';
import Class from '../classes/parserRep/class';
import Connection from '../classes/parserRep/connection';
import Package from '../classes/parserRep/package';


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