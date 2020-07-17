import IClass, { Visibility, Modifiers } from '../../../../interfaces/class';
import Attribute from "../../../parserRep/attribute";
import Method from "../../../parserRep/method";

import TypeSelectCreator from '../typeSelectCreator';
import NameSelectCreator from '../nameInputCreator';
import AttributeInputCreator from '../attributeInputCreator';
import MethodInputCreator from '../methodInputCreator';
import ClassUpdateController from '../../../controller/classUpdateController';




export default class ClassEditingView{

    public static CreateClassEditingView(selectedClass: IClass, sender : any, graph: any, view: HTMLDivElement): HTMLDivElement{


          let table = document.createElement("table");

          //type
          let typeSelectCreator = new TypeSelectCreator(graph);
          let type_tr = typeSelectCreator.createTypeSeclectDiv(selectedClass, sender);
          table.appendChild(type_tr);

          //name
          let nameInputCreator = new NameSelectCreator(graph);
          let name_tr = nameInputCreator.createNameInputDiv(selectedClass, sender);
          table.appendChild(name_tr);
          view.appendChild(table);

          //attribute
          let attributeInputCreator = new AttributeInputCreator(graph);
          let attribute_div = attributeInputCreator.createNameInputDiv(selectedClass, sender);
          let attributeHeader = document.createElement('h3');
          attributeHeader.innerText = 'Attributes';

          let newAttributeButton = document.createElement('button');
          newAttributeButton.innerText = '+ Attribute';
          newAttributeButton.onclick = () =>{
            if (selectedClass != null){
              selectedClass.attributes.push(new Attribute('name','dataType',Visibility.public,Modifiers.none));
              
              graph.getModel().beginUpdate();
              ClassUpdateController.updateClassValues(graph,sender.cells[0], selectedClass);
              graph.getModel().endUpdate();

              let tempSelectedCell = sender.cells[0];
              graph.getSelectionModel().clear();
              graph.getSelectionModel().addCell(tempSelectedCell);
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
              classToaddMethod.methods.push(new Method('name',Visibility.public,Modifiers.none));

              graph.getModel().beginUpdate();
              ClassUpdateController.updateClassValues(graph,sender.cells[0], selectedClass);
              graph.getModel().endUpdate();

              let tempSelectedCell = sender.cells[0];
              graph.getSelectionModel().clear();
              graph.getSelectionModel().addCell(tempSelectedCell);

            }
          }

          view.appendChild(methodHeader);
          view.appendChild(methode_div);
          view.appendChild(newMethodButton);
        

        return view;

    } 
}