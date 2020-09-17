import DiagramCreator from "../../../../helper/diagramCreator";
import Package from "../../../model/package";
import Class from "../../../model/class";

export default class ClassChangeController{

    public static ClassChange(change: any, classToChange: Class){

        if(change.parent === null ){

            DiagramCreator.diagram[DiagramCreator.activeIndex].removeClass(classToChange);
        }

        else if(typeof change.parent.value === 'undefined'){
          
          if(change.previous === null){

            DiagramCreator.diagram[DiagramCreator.activeIndex].addClass(classToChange);
          }
          else if(change.previous.value instanceof Package){
            let temp = change.previous.value as Package;

            temp.RemoveClassReference(classToChange);
          }
        }

        else if(change.parent.value instanceof Package){
          let pakg = change.parent.value as Package;
          //#1: 3
          if(change.previous === null){

            
            DiagramCreator.diagram[DiagramCreator.activeIndex].addClass(classToChange);
            pakg.AddClassReference(classToChange);
          }
          else if(typeof change.previous.value === 'undefined'){

            pakg.AddClassReference(classToChange);
          }
          else if(change.previous.value instanceof Package){

            let prev = change.previous.value as Package;
            prev.RemoveClassReference(classToChange);
            pakg.AddClassReference(classToChange)
          }
        }
    }
}