import Package from "../../../parserRep/package";
import Connection from "../../../parserRep/connection";
import Class from "../../../parserRep/class";
import DiagramCreator from "../../../../helper/diagramCreator";
import Note from "../../../parserRep/note";

//This Class handles the Undo/Redo Change of values from Models, adds change to Diagram and removes old from Diagram
export default class ValueChangeController{

    public static valueChanged(actualElementValue: any , previousElementValue: any){

        if(actualElementValue instanceof Class && previousElementValue instanceof Class){
            DiagramCreator.diagram[DiagramCreator.activeIndex].removeClass(previousElementValue,true);
            DiagramCreator.diagram[DiagramCreator.activeIndex].addClass(actualElementValue);            
            let actualClass = actualElementValue as Class;
            if(actualClass != null && actualClass.package !== ''){
              let packageOFClass = DiagramCreator.diagram[DiagramCreator.activeIndex].package_declarations.find(e => e.getName() === actualClass.package);
              packageOFClass?.AddClassReference(actualClass);
            }            
            actualClass.NotifyObservers(previousElementValue.getName(),actualElementValue.getName())
          }

          else if(actualElementValue instanceof Connection && previousElementValue instanceof Connection){
            DiagramCreator.diagram[DiagramCreator.activeIndex].removeConnection(previousElementValue);
            DiagramCreator.diagram[DiagramCreator.activeIndex].addConnection(actualElementValue);
          }

          else if(actualElementValue == null && previousElementValue instanceof Connection){        
            DiagramCreator.diagram[DiagramCreator.activeIndex].removeConnection(previousElementValue);
          }

          else if(actualElementValue instanceof Package && previousElementValue instanceof Package){
            DiagramCreator.diagram[DiagramCreator.activeIndex].removePackage(previousElementValue,false);
            DiagramCreator.diagram[DiagramCreator.activeIndex].addPackage(actualElementValue);
            let actualPackage = actualElementValue as Package;
            if(actualPackage != null && actualPackage.package !== ''){
              let packageOFClass = DiagramCreator.diagram[DiagramCreator.activeIndex].package_declarations.find(e => e.getName() === actualPackage.package);
              packageOFClass?.AddPackageReference(actualPackage);
            }
          }

          else if(actualElementValue instanceof Note && previousElementValue instanceof Note){
            DiagramCreator.diagram[DiagramCreator.activeIndex].removeNote(previousElementValue);
            DiagramCreator.diagram[DiagramCreator.activeIndex].addNote(actualElementValue);         
          }
    }
}