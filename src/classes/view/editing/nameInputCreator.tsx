import IName from "../../../interfaces/named";
import NameChangeController from "../../controller/modelController/nameController";





export default class NameInputCreator {
  controller: NameChangeController

  constructor(controller: NameChangeController) {
    this.controller = controller;
  }

  public createNameInputDiv(selectedElement: IName): HTMLTableRowElement {

    let tr1 = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let p = document.createElement("p");

    p.innerHTML = "Name: ";
    td1.appendChild(p);

    let input2 = document.createElement("input");
    input2.type = "text";
    input2.value = selectedElement.getName();

    input2.onchange = () => {
      this.controller.updateName(input2.value);
    };

    td2.appendChild(input2);
    tr1.appendChild(td1);
    tr1.appendChild(td2);
    return tr1;

    
  }



}
