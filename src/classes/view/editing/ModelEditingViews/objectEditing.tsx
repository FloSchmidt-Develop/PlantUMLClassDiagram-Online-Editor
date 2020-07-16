import IClass from '../../../../interfaces/class';
import Attribute from "../../../parserRep/attribute";
import Method from "../../../parserRep/method";

import TypeSelectCreator from '../typeSelectCreator';
import NameSelectCreator from '../nameInputCreator';
import ObjectDataTypeInputCreator from '../objectDataTypeInputCreator';
import DeclarationInputCreator from '../declarationInputCreator';
import ClassUpdateController from '../../../controller/classUpdateController';
import Class from '../../../../interfaces/class';
import Declaration from '../../../parserRep/declaration';




export default class ObjectEditingView{

    public static CreateObjectEditingView(selectedClass: Class, sender : any, graph: any, view: HTMLDivElement): HTMLDivElement{


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

        //declarations
        let dataTypeInputCreator = new ObjectDataTypeInputCreator(graph);
        let dataTypediv = dataTypeInputCreator.createTypeSeclectDiv(sender.cells[0].value as Class, sender);


        let declarationInputCreator = new DeclarationInputCreator(graph);
        let declaration_div = declarationInputCreator.createNameInputDiv(sender.cells[0].value as Class, sender);
        let declarationHeader = document.createElement('h3');
        declarationHeader.innerText = 'Declarations';

        let newDeclarationButton = document.createElement('button');
        newDeclarationButton.innerText = 'at new Declaration';
        newDeclarationButton.onclick = () =>{
            let classToaddMethod = (sender.cells[0].value as Class);

            if (classToaddMethod != null){
            classToaddMethod.declarations.push(new Declaration('name',''));

            graph.getModel().beginUpdate();
            ClassUpdateController.updateClassValues(graph,sender.cells[0], classToaddMethod);
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