
import ClassEditingView from "./ModelEditingViews/classEditing";
import ObjectEditingView from "./ModelEditingViews/objectEditing";
import Connection from "../../../interfaces/connection";
import ConnectionEditingView from "./ModelEditingViews/connectionEditing";
import Package from "../../../interfaces/package";
import PackageEditingView from "./ModelEditingViews/packageEditing";
import Class from "../../parserRep/class";
import MyObject from "../../parserRep/myObject";
import Note from "../../parserRep/note";
import NoteEditingView from "./ModelEditingViews/noteEditing";

export default class EditingView{

    public static CreateEditingView(sender: any,graph: any, editPanel: React.RefObject<HTMLDivElement>){
        let view = document.createElement('div');
        let senderCell = sender.cells[0];
          
        if ( typeof senderCell !== 'undefined'){
          if( senderCell.value != null && (typeof senderCell.value) !== 'undefined' && senderCell.value instanceof Class)
          {
  
            //Class, Interface, Object, abstract-------------------------------
            if((senderCell.value as Class).type === 'class'
            || (senderCell.value as Class).type === 'abstractclass'
            || (senderCell.value as Class).type === 'abstract'
            || (senderCell.value as Class).type === 'interface')
            {
              
              ClassEditingView.CreateClassEditingView(senderCell.value as Class,sender,graph,view);
  
            }
            else if((senderCell.value as Class).type === 'object')
            {
            
              ObjectEditingView.CreateObjectEditingView(senderCell.value as MyObject, sender, graph,view);
  
            }
          }
  
          //Connection------------------------------------
          else if (senderCell.value != null 
          && (sender.cells[0].value as Connection) != null 
          && (sender.cells[0].value as Connection).type === 'Connection') 
          {
              
            ConnectionEditingView.CreateConnectionEditingView(sender.cells[0].value as Connection,sender,graph,view);
  
          }
          //Package---------------------------------------
          else if (senderCell.value != null 
          && (sender.cells[0].value as Package) != null 
          && (sender.cells[0].value as Package).type === 'Package') 
          {
              
            PackageEditingView.CreatePackageEditingView(sender.cells[0].value as Package,sender,graph,view)
            
          }
          //Note------------------------
          else if(senderCell.value != null
            && (sender.cells[0].value as Note) != null
            && (sender.cells[0].value as Note).type === 'Note'){


              NoteEditingView.CreateNoteEditingView(sender.cells[0].value as Note,sender,graph,view);

          }
      }
      //Nothing selected------------------------
      else{
        let attributeHeader = document.createElement('h3');
        attributeHeader.innerText = 'no Element Selected';
        view.appendChild(attributeHeader);
      }
  
      //Delete old view from DOM
      if (editPanel.current !== null) {
        var oldChild = editPanel.current.firstChild;
        if (oldChild !== null) {
          try {
            editPanel.current.removeChild(oldChild);
          } catch (error) {
            alert('something went wrong')
          }

        }
        editPanel.current?.appendChild(view);
      }
    }

}