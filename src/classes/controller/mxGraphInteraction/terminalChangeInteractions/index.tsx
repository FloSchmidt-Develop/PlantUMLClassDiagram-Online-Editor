import Connection from "../../../model/connection";
import Class from "../../../model/class";
import Note from "../../../model/note";


export default class TerminalChangeController{

    public static TerminalChange(change: any){
        let child = change.cell;

            
        if(child != null && child.value instanceof Connection){
            
            let con = child.value as Connection;
            let changeSource = false;
            
            //Connection is disconnected from Class
            if(change.previous != null && change.previous.value instanceof Class){
                let previous = change.previous.value as Class
                previous.removeObserver(con);

                if(con.sourceElement == previous.alias){
                    changeSource = true;
                }
                else{
                    changeSource = false;
                }
            }

            //Connection is disconnected form Connection
            else if(change.previous != null && change.previous.value instanceof Connection){
                let previous = change.previous.value as Connection;
                previous.removeObserver(con);

                if(con.sourceElement == '(' +previous.destinationElement + ',' + previous.sourceElement + ')'){
                    changeSource = true;
                }
                else{
                    changeSource = false;
                }
            }

            //Connection is disconnected form Note
            else if(change.previous != null && change.previous.value instanceof Note){
                let previous = change.previous.value as Note;
                previous.removeObserver(con);

                if(con.sourceElement == previous.getName()){
                    changeSource = true;
                }
                else{
                    changeSource = false;
                }
            }

            if(change.previous == null && child.target != null && child.target.value instanceof Connection){
            //Don't change anything
            }

            //Connection is reconnected to a Class
            else if(change.terminal != null && change.terminal.value instanceof Class){
                let terminal = change.terminal.value as Class;

                terminal.registerObserver(con);
                if(changeSource){
                    con.sourceElement = terminal.alias;
                }
                else{
                    con.destinationElement = terminal.alias;
                }
            }
            
            //Connection is reconnected to a Note
            else if(change.terminal != null && change.terminal.value instanceof Note){
                let terminal = change.terminal.value as Note;

                terminal.registerObserver(con);
                if(changeSource){
                    con.sourceElement = terminal.getName();
                }
                else{
                    con.destinationElement = terminal.getName();
                }
            }

            //Connection is reconnected to a Connection
            else if(change.terminal != null && change.terminal.value instanceof Connection){
                let terminal = change.terminal.value as Connection;

                terminal.registerObserver(con);
                if(changeSource){
                    con.sourceElement = '(' + terminal.destinationElement + ',' + terminal.sourceElement + ')';
                }
                else{
                    con.destinationElement = '(' + terminal.destinationElement + ',' + terminal.sourceElement + ')';
                }
            }

        }
    }
}