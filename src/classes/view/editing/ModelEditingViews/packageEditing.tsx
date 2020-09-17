

import NameSelectCreator from '../nameInputCreator';


import NameChangeController from "../../../controller/modelController/nameController";
import Package from '../../../parserRep/package';




export default class PackageEditingView{

    public static CreatePackageEditingView(selectedPackage: Package, sender : any, graph: any, view: HTMLDivElement): HTMLDivElement{


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