import IClass from "../../interfaces/class";
import ClassUpdateController from '../../classes/controller/classUpdateController';


export default class AttributeInputCreator {
  graph: any;

  constructor(graph: any) {
    this.graph = graph;
  }

  public createNameInputDiv(
    elementToChange: IClass,
    sender: any
  ): HTMLDivElement {
    let container_div = document.createElement("div");
    

    if(elementToChange !== null && elementToChange.attributes !== null && typeof elementToChange.attributes !== 'undefined'){
    container_div.appendChild(document.createElement('hr'));


    for (let index = 0; index < elementToChange.attributes.length; index++) {
      const attribute = elementToChange.attributes[index];
      let row_div = document.createElement("div");

      //visibility
      let visibility_p = document.createElement("p");
      visibility_p.style.display = "inline";
      visibility_p.innerText = " Visibility: ";
      row_div.appendChild(visibility_p);

      let input_visibility = document.createElement("input");
      input_visibility.type = "text";
      input_visibility.value = attribute.visibility;
      input_visibility.style.width = "20px";

      input_visibility.onchange = () => {
        if (elementToChange !== null) {
          elementToChange.attributes[index].setVisibility(input_visibility.value);
        }

      //Update Cell
      this.graph.getModel().beginUpdate();
      ClassUpdateController.updateClassValues(this.graph,sender.cells[0], elementToChange);
      this.graph.getModel().endUpdate();

      };
      row_div.appendChild(input_visibility);
      row_div.appendChild(document.createElement('br'));

      //name
      let name_p = document.createElement("p");
      name_p.style.display = "inline";
      name_p.innerText = " Name: ";
      row_div.appendChild(name_p);

      let input_name = document.createElement("input");
      input_name.type = "text";
      input_name.value = attribute.getName();

      input_name.onchange = () => {
        if (elementToChange !== null) {
          elementToChange.attributes[index].setName(input_name.value);
        }

      //Update Cell
      this.graph.getModel().beginUpdate();
      ClassUpdateController.updateClassValues(this.graph,sender.cells[0], elementToChange);
      this.graph.getModel().endUpdate();

      };
      row_div.appendChild(input_name);
      row_div.appendChild(document.createElement('br'));


      //DataType
      let type_p = document.createElement("p");
      type_p.style.display = "inline";
      type_p.innerText = " Datatype: ";
      row_div.appendChild(type_p);

      let input_type = document.createElement("input");
      input_type.type = "text";
      input_type.value = attribute.dataType;

      input_type.onchange = () => {
        if (elementToChange !== null) {
          elementToChange.attributes[index].setDataType(input_type.value);
        }

        //Update Cell
        this.graph.getModel().beginUpdate();
        ClassUpdateController.updateClassValues(this.graph,sender.cells[0], elementToChange);
        this.graph.getModel().endUpdate();
        
      };
      row_div.appendChild(input_type);


      container_div.appendChild(row_div);
      container_div.appendChild(document.createElement('hr'));
    }
  }

    return container_div;
  }
}
