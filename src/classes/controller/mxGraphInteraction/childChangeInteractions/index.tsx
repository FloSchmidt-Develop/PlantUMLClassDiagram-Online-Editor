import Class from "../../../model/class";
import Package from "../../../model/package";
import Connection from "../../../model/connection";
import Note from "../../../model/note";
import ClassChangeController from "./classChangeController";
import PackageChangeController from "./packageChangeController";
import ConnectionChangeController from "./connectionChangeController";
import NoteChangeController from "./noteChangeController";

export default class childChangeController{

    public static ChildChange(change: any){
        let child = change.child.value;
        
        if(child != null && child instanceof Class){

            ClassChangeController.ClassChange(change,child);

        }
        //Add Remove support for Packages 
        else if(child != null && child instanceof Package){

            PackageChangeController.ChangePackage(change,child);
            
        }

        //Add Remove Support for Connections
        else if(child != null && child instanceof Connection){              
            
            ConnectionChangeController.ChangeConnection(change,child);
                    
        }

        else if(child != null && child instanceof Note){
            
            NoteChangeController.ChangeNote(change,child);
        
        }
    }
}