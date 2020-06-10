import IClass from "../../interfaces/class";

export default class DeclarationInputCreator {
  graph: any;

  constructor(graph: any) {
    this.graph = graph;
  }

  public createNameInputDiv(
    selectedClass: IClass,
    sender: any
  ): HTMLDivElement {
    let container_div = document.createElement("div");

    if(selectedClass !== null && selectedClass.declarations !== null && typeof selectedClass.declarations !== 'undefined'){



    for (let index = 0; index < selectedClass.declarations.length; index++) {
      const declaration = selectedClass.declarations[index];
      let row_div = document.createElement("div");

      //name
      let name_p = document.createElement("p");
      name_p.style.display = "inline";
      name_p.innerText = " name: ";
      row_div.appendChild(name_p);

      let input_name = document.createElement("input");
      input_name.type = "text";
      input_name.value = declaration.name;

      input_name.onchange = () => {
        var classToChange = selectedClass;
        if (classToChange !== null) {
          classToChange.declarations[index].setName(input_name.value);
        }

        //Update Cell
        this.graph.getModel().beginUpdate();
        this.graph.model.setValue(sender.cells[0], classToChange);
        this.graph.getModel().endUpdate();

      };
      row_div.appendChild(input_name);

      //DataType
      let type_p = document.createElement("p");
      name_p.style.display = "inline";
      name_p.innerText = " name: ";
      row_div.appendChild(name_p);

      let input_type = document.createElement("input");
      input_type.type = "text";
      input_type.value = declaration.declaration_value

      input_type.onchange = () => {
        var classToChange = selectedClass;
        if (classToChange !== null) {
          classToChange.declarations[index].setDeclarationValue(input_type.value);
        }

        //Update Cell
        this.graph.getModel().beginUpdate();
        this.graph.model.setValue(sender.cells[0], classToChange);
        this.graph.getModel().endUpdate();
        
      };
      row_div.appendChild(input_type);


      container_div.appendChild(row_div);
    }
  }

    return container_div;
  }
}
