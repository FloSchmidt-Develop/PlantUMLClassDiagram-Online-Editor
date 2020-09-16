

import TypeSelectCreator from '../typeSelectCreator';
import NameSelectCreator from '../nameInputCreator';
import ObjectDataTypeInputCreator from '../objectDataTypeInputCreator';
import DeclarationInputCreator from '../declarationInputCreator';

import Declaration from '../../../parserRep/declaration';
import MyObject from '../../../parserRep/myObject';
import ElementUpdateController from '../../../controller/elementUpdateController';
import IClass from '../../../../interfaces/class';
import ClassUpdateController from '../../../controller/classUpdateController';
import ClassController from '../../../controller/modelController/classConntroller';
import NameChangeController from '../../../controller/modelController/nameController';




export default class ObjectEditingView{

    public static CreateObjectEditingView(selectedClass: MyObject, sender : any, graph: any, view: HTMLDivElement): HTMLDivElement{

        let controller = new ClassController(selectedClass,sender.cells[0], graph);
        let nameController = new NameChangeController(selectedClass,sender.cells[0], graph);
        
          let table = document.createElement("table");

          //type
          let typeSelectCreator = new TypeSelectCreator(controller);
          let type_tr = typeSelectCreator.createTypeSelectDiv(selectedClass);
          table.appendChild(type_tr);

          //name
          let nameInputCreator = new NameSelectCreator(nameController);
          let name_tr = nameInputCreator.createNameInputDiv(selectedClass as IClass);
          table.appendChild(name_tr);
          view.appendChild(table);

        //dataType
        let dataTypeInputCreator = new ObjectDataTypeInputCreator(controller);
        let dataTypediv = dataTypeInputCreator.createTypeSeclectDiv(sender.cells[0].value as IClass);

        //declarations
        let declarationInputCreator = new DeclarationInputCreator(graph);
        let declaration_div = declarationInputCreator.createNameInputDiv(sender.cells[0].value as IClass);
        let declarationHeader = document.createElement('h3');
        declarationHeader.innerText = 'Declarations';

        let newDeclarationButton = document.createElement('button');
        newDeclarationButton.innerText = 'at new Declaration';
        newDeclarationButton.onclick = () =>{
            controller.AddDeclaration(new Declaration('name',''));
        }

        view.appendChild(dataTypediv);
        view.appendChild(declarationHeader);
        view.appendChild(declaration_div);
        view.appendChild(newDeclarationButton);
        

        return view;

    } 
}