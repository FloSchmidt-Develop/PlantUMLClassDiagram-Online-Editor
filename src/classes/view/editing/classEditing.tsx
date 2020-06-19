import IClass from '../../../interfaces/class';
import Attribute from "../../parserRep/attribute";
import Method from "../../parserRep/method";

import TypeSelectCreator from '../../../helper/htmlCreators/typeSelectCreator';
import NameSelectCreator from '../../../helper/htmlCreators/nameInputCreator';
import AttributeInputCreator from '../../../helper/htmlCreators/attributeInputCreator';
import MethodInputCreator from '../../../helper/htmlCreators/methodInputCreator';




export default class ClassEditingView{

    public static CreateClassEditingView(selectedClass: IClass, sender : any, graph: any, view: HTMLDivElement): HTMLDivElement{

          //attribute
          let attributeInputCreator = new AttributeInputCreator(graph);
          let attribute_div = attributeInputCreator.createNameInputDiv(selectedClass, sender);
          let attributeHeader = document.createElement('h3');
          attributeHeader.innerText = 'Attributes';

          let newAttributeButton = document.createElement('button');
          newAttributeButton.innerText = '+ Attribute';
          newAttributeButton.onclick = () =>{
            if (selectedClass != null){
                selectedClass.attributes.push(new Attribute('name','dataType',''));
              graph.getModel().beginUpdate();
              graph.model.setValue(sender.cells[0], selectedClass);
              graph.getModel().endUpdate();
            }
            
          }

          view.appendChild(attributeHeader);
          view.appendChild(attribute_div);
          view.appendChild(newAttributeButton);

          //method
          let methodInputCreator = new MethodInputCreator(graph);
          let methode_div = methodInputCreator.createNameInputDiv(selectedClass, sender);
          let methodHeader = document.createElement('h3');
          methodHeader.innerText = 'Methods';

          let newMethodButton = document.createElement('button');
          newMethodButton.innerText = '+ Method';
          newMethodButton.onclick = () =>{
            let classToaddMethod = (selectedClass);
            if (classToaddMethod != null){
              classToaddMethod.methods.push(new Method('name',''));
              graph.getModel().beginUpdate();
              graph.model.setValue(sender.cells[0], classToaddMethod);
              graph.getModel().endUpdate();
            }
          }

          view.appendChild(methodHeader);
          view.appendChild(methode_div);
          view.appendChild(newMethodButton);
        

        return view;

    } 
}