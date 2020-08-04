

import TypeSelectCreator from '../typeSelectCreator';
import NameSelectCreator from '../nameInputCreator';
import ObjectDataTypeInputCreator from '../objectDataTypeInputCreator';
import DeclarationInputCreator from '../declarationInputCreator';

import Declaration from '../../../parserRep/declaration';
import MyObject from '../../../parserRep/myObject';
import ElementUpdateController from '../../../controller/elementUpdateController';
import IClass from '../../../../interfaces/class';
import ClassUpdateController from '../../../controller/classUpdateController';




export default class ObjectEditingView{

    public static CreateObjectEditingView(selectedClass: MyObject, sender : any, graph: any, view: HTMLDivElement): HTMLDivElement{


          let table = document.createElement("table");

          //type
          let typeSelectCreator = new TypeSelectCreator(graph);
          let type_tr = typeSelectCreator.createTypeSeclectDiv(selectedClass, sender);
          table.appendChild(type_tr);

          //name
          let nameInputCreator = new NameSelectCreator(graph);
          let name_tr = nameInputCreator.createNameInputDiv(selectedClass as IClass, sender);
          table.appendChild(name_tr);
          view.appendChild(table);

        //dataType
        let dataTypeInputCreator = new ObjectDataTypeInputCreator(graph);
        let dataTypediv = dataTypeInputCreator.createTypeSeclectDiv(sender.cells[0].value as IClass, sender);

        //declarations
        let declarationInputCreator = new DeclarationInputCreator(graph);
        let declaration_div = declarationInputCreator.createNameInputDiv(sender.cells[0].value as IClass, sender);
        let declarationHeader = document.createElement('h3');
        declarationHeader.innerText = 'Declarations';

        let newDeclarationButton = document.createElement('button');
        newDeclarationButton.innerText = 'at new Declaration';
        newDeclarationButton.onclick = () =>{
            let classToaddMethod = (sender.cells[0].value as IClass);
            let newObject = classToaddMethod.cloneModel();


            if (newObject != null){
                newObject.declarations.push(new Declaration('name',''));

            graph.getModel().beginUpdate();
            ClassUpdateController.updateClassValues(graph,sender.cells[0], newObject);
            graph.getModel().endUpdate();

            let tempSelectedCell = sender.cells[0];
            graph.getSelectionModel().clear();
            graph.getSelectionModel().addCell(tempSelectedCell);
            }
        }

        view.appendChild(dataTypediv);
        view.appendChild(declarationHeader);
        view.appendChild(declaration_div);
        view.appendChild(newDeclarationButton);
        

        return view;

    } 
}