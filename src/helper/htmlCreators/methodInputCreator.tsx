import IClass from "../../interfaces/class";
import ClassUpdateController from '../../classes/controller/classUpdateController';


export default class MethodInputCreator {
  graph: any;

  constructor(graph: any) {
    this.graph = graph;
  }

  public createNameInputDiv(
    elementToChange: IClass,
    sender: any
  ): HTMLDivElement {
    let container_div = document.createElement("div");

    if(elementToChange !== null && elementToChange.methods !== null && typeof elementToChange.methods !== 'undefined'){
      container_div.appendChild(document.createElement('hr'));

    for (let index = 0; index < elementToChange.methods.length; index++) {
      const method = elementToChange.methods[index];
      let row_div = document.createElement("div");

      //visibility
      let visibility_p = document.createElement("p");
      visibility_p.style.display = "inline";
      visibility_p.innerText = " Visibility: ";
      row_div.appendChild(visibility_p);

      let input_visibility = document.createElement("input");
      input_visibility.type = "text";
      input_visibility.value = method.visibility;
      input_visibility.style.width = "20px";

      input_visibility.onchange = () => {

        if (elementToChange !== null) {
          elementToChange.methods[index].setVisibility(input_visibility.value);
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
      name_p.innerText = " Name: "
      row_div.appendChild(name_p);

      let input_name = document.createElement("input");
      input_name.type = "text";
      input_name.value = method.name;

      input_name.onchange = () => {
        if (elementToChange !== null) {
          elementToChange.methods[index].setName(input_name.value);
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
      type_p.innerText = ' DataType: '
      row_div.appendChild(type_p);

      let input_type = document.createElement("input");
      input_type.type = "text";
      input_type.value = method.dataType;

      input_type.onchange = () => {
        if (elementToChange !== null) {
          elementToChange.methods[index].setDataType(input_type.value);
        }

        //Update Cell
        this.graph.getModel().beginUpdate();
        ClassUpdateController.updateClassValues(this.graph,sender.cells[0], elementToChange);
        this.graph.getModel().endUpdate();

      };
      row_div.appendChild(input_type);
      row_div.appendChild(document.createElement('br'));
      container_div.appendChild(row_div);


      //Function Arguments
      let functionArgumentHeader = document.createElement("h6");
      functionArgumentHeader.innerText = 'Function Arguments:';
      container_div.appendChild(functionArgumentHeader);

      for (let index = 0; index < (method.attributeList ? method.attributeList?.length : 0) ; index++) {
        const argument = method.attributeList ?  method.attributeList[index] : null;
        if(argument != null){

          let functionArgumentDiv = document.createElement("div");
          functionArgumentDiv.style.marginLeft = '20px';


          let p = document.createElement("p");
          p.style.display = "inline";
          p.innerText = '#' + (index + 1);
          container_div.appendChild(p);


          //argument Name
          let argumentName_p = document.createElement("p");
          argumentName_p.style.display = "inline";
          argumentName_p.innerText = ' Argument Name: '
          functionArgumentDiv.appendChild(argumentName_p);

          let input_argument_name = document.createElement("input");
          input_argument_name.type = "text";
          input_argument_name.value = argument.name;

          input_argument_name.onchange = () => {
              argument.setName(input_argument_name.value);
            
          //Update Cell
          this.graph.getModel().beginUpdate();
          ClassUpdateController.updateClassValues(this.graph,sender.cells[0], elementToChange);
          this.graph.getModel().endUpdate();

          }
          functionArgumentDiv.appendChild(input_argument_name);
          functionArgumentDiv.appendChild(document.createElement('br'));


          //argument dataType
          let argumentDataType_p = document.createElement("p");
          argumentDataType_p.style.display = "inline";
          argumentDataType_p.innerText = ' Argument DataType: '
          functionArgumentDiv.appendChild(argumentDataType_p);

          let input_argument_dataType = document.createElement("input");
          input_argument_dataType.type = "text";
          input_argument_dataType.value = argument.dataType;

          input_argument_dataType.onchange = () => {
              argument.setDataType(input_argument_dataType.value);
            

          //Update Cell
          this.graph.getModel().beginUpdate();
          ClassUpdateController.updateClassValues(this.graph,sender.cells[0], elementToChange);
          this.graph.getModel().endUpdate();

          }
          functionArgumentDiv.appendChild(input_argument_dataType);

          container_div.appendChild(functionArgumentDiv);

          };     
        }

        container_div.appendChild(document.createElement("hr"));
      
      
           



        


    }
  }

    return container_div;
  }
}
