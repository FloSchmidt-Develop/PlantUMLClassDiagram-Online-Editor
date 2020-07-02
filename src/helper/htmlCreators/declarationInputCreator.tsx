import IClass from "../../interfaces/class";
import ClassUpdateController from '../../classes/controller/classUpdateController';


export default class DeclarationInputCreator {
  graph: any;

  constructor(graph: any) {
    this.graph = graph;
  }

  public createNameInputDiv(
    elementToChange: IClass,
    sender: any
  ): HTMLDivElement {
    let container_div = document.createElement("div");

    if(elementToChange !== null && elementToChange.declarations !== null && typeof elementToChange.declarations !== 'undefined'){



    for (let index = 0; index < elementToChange.declarations.length; index++) {
      const declaration = elementToChange.declarations[index];
      let row_div = document.createElement("div");

      //name
      let name_p = document.createElement("p");
      name_p.style.display = "inline";
      name_p.innerText = " name: ";
      row_div.appendChild(name_p);

      let input_name = document.createElement("input");
      input_name.type = "text";
      input_name.value = declaration.getName();
      row_div.appendChild(input_name);

      input_name.onchange = () => {

        if (elementToChange !== null) {
          elementToChange.declarations[index].setName(input_name.value);
        }

      //Update Cell
      this.graph.getModel().beginUpdate();
      ClassUpdateController.updateClassValues(this.graph,sender.cells[0], elementToChange);
      this.graph.getModel().endUpdate();

      };


      //DataType
      let type_p = document.createElement("p");
      type_p.style.display = "inline";
      type_p.innerText = " type: ";
      row_div.appendChild(type_p);

      let input_type = document.createElement("input");
      input_type.type = "text";
      input_type.value = declaration.declaration_value

      input_type.onchange = () => {
        if (elementToChange !== null) {
          elementToChange.declarations[index].setDeclarationValue(input_type.value);
        }
      
      
      //Update Cell
      this.graph.getModel().beginUpdate();
      ClassUpdateController.updateClassValues(this.graph,sender.cells[0], elementToChange);
      this.graph.getModel().endUpdate();
        
      };
      row_div.appendChild(input_type);


      container_div.appendChild(row_div);
    }
  }

    return container_div;
  }
}
