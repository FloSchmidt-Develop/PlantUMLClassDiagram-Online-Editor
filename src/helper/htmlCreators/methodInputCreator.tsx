import IClass from "../../interfaces/class";

export default class MethodInputCreator {
  graph: any;

  constructor(graph: any) {
    this.graph = graph;
  }

  public createNameInputDiv(
    selectedClass: IClass,
    sender: any
  ): HTMLDivElement {
    let container_div = document.createElement("div");

    if(selectedClass !== null && selectedClass.methods !== null && typeof selectedClass.methods !== 'undefined'){



    for (let index = 0; index < selectedClass.methods.length; index++) {
      const method = selectedClass.methods[index];
      let row_div = document.createElement("div");

      //visibility
      let visi_p = document.createElement("p");
      visi_p.style.display = "inline";
      visi_p.innerText = "visibility: ";
      row_div.appendChild(visi_p);

      let input_visibility = document.createElement("input");
      input_visibility.type = "text";
      input_visibility.value = method.visibility;
      input_visibility.style.width = "20px";

      input_visibility.onchange = () => {
        var classToChange = selectedClass;
        if (classToChange !== null) {
          classToChange.attributes[index].setVisibility(input_visibility.value);
        }
        this.graph.model.setValue(sender.cells[0], classToChange);
      };
      row_div.appendChild(input_visibility);

      //name
      let name_p = document.createElement("p");
      name_p.style.display = "inline";
      row_div.appendChild(name_p);

      let input_name = document.createElement("input");
      input_name.type = "text";
      input_name.value = method.name;

      input_name.onchange = () => {
        var classToChange = selectedClass;
        if (classToChange !== null) {
          classToChange.attributes[index].setName(input_name.value);
        }
        this.graph.model.setValue(sender.cells[0], classToChange);
      };
      row_div.appendChild(input_name);


      //DataType
      let input_type = document.createElement("input");
      input_type.type = "text";
      input_type.value = method.dataType;

      input_type.onchange = () => {
        var classToChange = selectedClass;
        if (classToChange !== null) {
          classToChange.attributes[index].setDataType(input_type.value);
        }
        this.graph.model.setValue(sender.cells[0], classToChange);
      };
      row_div.appendChild(input_type);


      container_div.appendChild(row_div);
    }
  }

    return container_div;
  }
}
