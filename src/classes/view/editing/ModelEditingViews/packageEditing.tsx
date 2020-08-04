
import Attribute from "../../../parserRep/attribute";
import Method from "../../../parserRep/method";

import TypeSelectCreator from '../typeSelectCreator';
import NameSelectCreator from '../nameInputCreator';
import AttributeInputCreator from '../attributeInputCreator';
import MethodInputCreator from '../methodInputCreator';
import ClassUpdateController from '../../../controller/classUpdateController';
import IPackage from '../../../../interfaces/package';




export default class PackageEditingView{

    public static CreatePackageEditingView(selectedPackage: IPackage, sender : any, graph: any, view: HTMLDivElement): HTMLDivElement{


          let table = document.createElement("table");

          //name
          let nameInputCreator = new NameSelectCreator(graph);
          let name_tr = nameInputCreator.createNameInputDiv(selectedPackage, sender);
          table.appendChild(name_tr);
          view.appendChild(table);
        
        return view;

    } 
}