
import Attribute from "../../../parserRep/attribute";
import Method from "../../../parserRep/method";

import TypeSelectCreator from '../typeSelectCreator';
import NameSelectCreator from '../nameInputCreator';
import AttributeInputCreator from '../attributeInputCreator';
import MethodInputCreator from '../methodInputCreator';
import ClassUpdateController from '../../../controller/classUpdateController';
import IPackage from '../../../../interfaces/package';
import NameChangeController from "../../../controller/modelController/nameController";




export default class PackageEditingView{

    public static CreatePackageEditingView(selectedPackage: IPackage, sender : any, graph: any, view: HTMLDivElement): HTMLDivElement{


          let table = document.createElement("table");
          let nameController = new NameChangeController(selectedPackage,sender.cells[0], graph);

          //name
          let nameInputCreator = new NameSelectCreator(nameController);
          let name_tr = nameInputCreator.createNameInputDiv(selectedPackage);
          table.appendChild(name_tr);
          view.appendChild(table);
        
        return view;

    } 
}