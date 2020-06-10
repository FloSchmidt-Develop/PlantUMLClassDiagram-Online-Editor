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
      let input_visibility = document.createElement("input");
      input_visibility.type = "text";
      input_visibility.value = method.visibility;
      input_visibility.style.width = "20px";

      input_visibility.onchange = () => {
        var classToChange = selectedClass;
        if (classToChange !== null) {
          classToChange.methods[index].setVisibility(input_visibility.value);
        }

        //update Cell
        this.graph.getModel().beginUpdate();
        this.graph.model.setValue(sender.cells[0], classToChange);
        this.graph.getModel().endUpdate();
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
          classToChange.methods[index].setName(input_name.value);
        }
        //Update Cell
        this.graph.getModel().beginUpdate();
        this.graph.model.setValue(sender.cells[0], classToChange);
        this.graph.getModel().endUpdate();
      };
      row_div.appendChild(input_name);

      //DataType
      let input_type = document.createElement("input");
      input_type.type = "text";
      input_type.value = method.dataType;

      input_type.onchange = () => {
        var classToChange = selectedClass;
        if (classToChange !== null) {
          classToChange.methods[index].setDataType(input_type.value);
        }

        //Update Cell
        this.graph.getModel().beginUpdate();
        this.graph.model.setValue(sender.cells[0], classToChange);
        this.graph.getModel().endUpdate();

      };
      row_div.appendChild(input_type);
      container_div.appendChild(row_div);


      //Function Arguments
      let functionArgumentHeader = document.createElement("p");
      functionArgumentHeader.innerText = 'Function Arguments';
      container_div.appendChild(functionArgumentHeader);

      for (let index = 0; index < (method.attributeList ? method.attributeList?.length : 0) ; index++) {
        const argument = method.attributeList ?  method.attributeList[index] : null;
        if(argument != null){
          let functionArgumentDiv = document.createElement("div");
          functionArgumentDiv.style.marginLeft = '20px';

          //argument Name
          let input_argument_name = document.createElement("input");
          input_argument_name.type = "text";
          input_argument_name.value = argument.name;

          input_argument_name.onchange = () => {
              argument.setName(input_argument_name.value);
            

            //Update Cell
            this.graph.getModel().beginUpdate();
            this.graph.model.setValue(sender.cells[0], selectedClass);
            this.graph.getModel().endUpdate();
          }
          functionArgumentDiv.appendChild(input_argument_name);


          //argument dataType
          let input_argument_dataType = document.createElement("input");
          input_argument_dataType.type = "text";
          input_argument_dataType.value = argument.dataType;

          input_argument_dataType.onchange = () => {
              argument.setDataType(input_argument_dataType.value);
            

            //Update Cell
            this.graph.getModel().beginUpdate();
            this.graph.model.setValue(sender.cells[0], selectedClass);
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
