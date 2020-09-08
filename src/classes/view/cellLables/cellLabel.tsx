import IClass from "../../../interfaces/class";
import MyObject from "../../parserRep/myObject";
import VertexCellLabel from "./vertexCellLable";
import Connection from "../../../interfaces/connection";
import Package from "../../../interfaces/package";
import Multiplicity from "../../../interfaces/multiplicity";
import Note from "../../parserRep/note";

export default class CellLabel{
    public static CreateCellLabel(cell: any): any
    {

        var actual_class: IClass | MyObject = cell.value;

        if(actual_class !== null && typeof actual_class !== 'undefined' 
        && (actual_class.type === 'interface' || actual_class.type === 'abstractclass'
        || actual_class.type === 'abstract'
        || actual_class.type === 'class' || actual_class.type === 'object'))
        {

            return VertexCellLabel.CreateVertexCellLabel(actual_class);
        }
        //Connection
        else if((cell.value as Connection) != null && (cell.value as Connection).type === 'Connection')
        { 

            let connection = (cell.value as Connection);
            return connection.stereoType;
        }
        //Package
        else if((cell.value as Package) != null && (cell.value as Package).type === 'Package')
        { 

            let actualPackage = (cell.value as Package);
            return actualPackage.getName();
        }
        //Multiplicity
        else if((cell.value as Multiplicity) != null && (cell.value as Multiplicity).type === 'Multiplicity')
        { 
            
            let actualMultiplicity = (cell.value as Multiplicity);
            return actualMultiplicity.value;
        }
        //Note
        else if((cell.value as Note) != null && (cell.value as Note).type === 'Note'){
            let actualNote = (cell.value as Note);
            return actualNote.content;
        }

    }
}