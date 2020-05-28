import IClass from "../../interfaces/class";

export default class {
  graph: any;

  constructor(graph: any) {
    this.graph = graph;
  }

  public createTypeSeclectDiv(
    selectedClass: IClass,
    sender: any
  ): HTMLTableRowElement {

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

    let option_object = document.createElement("option");
    option_object.value = "object";
    let object_text = document.createTextNode("Object");
    option_object.appendChild(object_text);

    select.appendChild(option_class);
    select.appendChild(option_interface);
    select.appendChild(option_object);

    select.selectedIndex =
      selectedClass.type === "class"
        ? 0
        : selectedClass.type === "interface"
        ? 1
        : selectedClass.type === "object"
        ? 2
        : 0;

    select.onchange = () => {
      var classToChange = selectedClass;
      if (classToChange !== null) {
        classToChange.setType(
          (document.getElementById("type-select") as HTMLSelectElement).value
        );
      }
      this.graph.model.setValue(sender.cells[0], classToChange);
    };

    td2.appendChild(select);
    tr1.appendChild(td1);
    tr1.appendChild(td2);

    return tr1;
  }
}
