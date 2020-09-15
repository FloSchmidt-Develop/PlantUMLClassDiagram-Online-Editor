import IClass from "../../../interfaces/class";
import ClassUpdateController from '../../controller/classUpdateController';
import Clonable from "../../../interfaces/cloneable";
import Class from "../../../interfaces/class";
import ClassController from "../../controller/modelController/classConntroller";

export default class {
  controller: ClassController

  constructor(controller: ClassController) {
    this.controller = controller
  }

  public createTypeSelectDiv(elementToChange: IClass): HTMLTableRowElement {


    //TODO Check IClass for undefined !! 
    let tr1 = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let p = document.createElement("p");

    p.innerText = "Type: ";
    td1.appendChild(p);

    let select = document.createElement("select");
    select.id = "type-select";
    select.style.width = "200px";

    let option_class = document.createElement("option");
    option_class.value = "class";
    let class_text = document.createTextNode("Class");
    option_class.appendChild(class_text);

    let option_interface = document.createElement("option");
    option_interface.value = "interface";
    let interface_text = document.createTextNode("Interface");
    option_interface.appendChild(interface_text);

    let option_abstract = document.createElement("option");
    option_abstract.value = "abstract";
    let abstract_text = document.createTextNode("Abstract");
    option_abstract.appendChild(abstract_text);

    let option_object = document.createElement("option");
    option_object.value = "object";
    let object_text = document.createTextNode("Object");
    option_object.appendChild(object_text);

    select.appendChild(option_class);
    select.appendChild(option_interface);
    select.appendChild(option_abstract);
    select.appendChild(option_object);

    select.selectedIndex =
    elementToChange.type === "class"
        ? 0
        : elementToChange.type === "interface"
        ? 1
        : elementToChange.type === "abstract"
        ? 2
        : elementToChange.type === "object"
        ? 3
        : 0;

    select.onchange = () => {
      this.controller.updateClassType(select.value);
    };

    td2.appendChild(select);
    tr1.appendChild(td1);
    tr1.appendChild(td2);

    return tr1;
  }
}
