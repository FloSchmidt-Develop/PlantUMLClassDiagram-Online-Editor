import { Visibility, Modifiers } from '../../../../interfaces/class';
import Attribute from "../../../model/attribute";
import Method from "../../../model/method";

import TypeSelectCreator from '../typeSelectCreator';
import NameSelectCreator from '../nameInputCreator';
import AttributeInputCreator from '../attributeInputCreator';
import MethodInputCreator from '../methodInputCreator';
import ClassUpdateController from '../../../controller/classUpdateController';
import ClassController from '../../../controller/modelController/classConntroller';
import NameChangeController from '../../../controller/modelController/nameController';
import Class from '../../../model/class';




export default class ClassEditingView{

    public static CreateClassEditingView(selectedClass: Class, sender : any, graph: any, view: HTMLDivElement): HTMLDivElement{


          let table = document.createElement("table");
          let controller = new ClassController(selectedClass,sender.cells[0], graph);
          let nameController = new NameChangeController(selectedClass,sender.cells[0], graph);

          //type
          let typeSelectCreator = new TypeSelectCreator(controller);
          let type_tr = typeSelectCreator.createTypeSelectDiv(selectedClass);
          table.appendChild(type_tr);

          //name
          let nameInputCreator = new NameSelectCreator(nameController);
          let name_tr = nameInputCreator.createNameInputDiv(selectedClass);
          table.appendChild(name_tr);
          view.appendChild(table);

          //attribute
          let attributeInputCreator = new AttributeInputCreator(controller);
          let attribute_div = attributeInputCreator.createNameInputDiv(selectedClass);
          let attributeHeader = document.createElement('h3');
          attributeHeader.innerText = 'Attributes';

          let newAttributeButton = document.createElement('button');
          newAttributeButton.innerText = '+ Attribute';
          newAttributeButton.onclick = () =>{
            controller.addAttribute(new Attribute('name','dataType',Visibility.public,Modifiers.none));
          }

          view.appendChild(attributeHeader);
          view.appendChild(attribute_div);
          view.appendChild(newAttributeButton);

          //method
          let methodInputCreator = new MethodInputCreator(controller);
          let methode_div = methodInputCreator.createNameInputDiv(selectedClass);
          let methodHeader = document.createElement('h3');
          methodHeader.innerText = 'Methods';

          let newMethodButton = document.createElement('button');
          newMethodButton.innerText = '+ Method';
          newMethodButton.onclick = () =>{
            controller.addMethod(new Method('name',Visibility.public,Modifiers.none));
          }

          view.appendChild(methodHeader);
          view.appendChild(methode_div);
          view.appendChild(newMethodButton);
        

        return view;

    } 
}