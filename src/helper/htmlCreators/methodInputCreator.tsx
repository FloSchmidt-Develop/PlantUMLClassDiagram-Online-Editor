import IClass from "../../interfaces/class";
import ClassUpdateController from '../../classes/controller/classUpdateController';
import Attribute from "../../classes/parserRep/attribute";


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

      let moveUpMethodButton = document.createElement('button');
      moveUpMethodButton.innerText = '/\\';
      moveUpMethodButton.style.float = 'right';
      moveUpMethodButton.style.marginRight = '10px';

      moveUpMethodButton.onclick = () => {
        elementToChange.ChangeMethodPosition(method,true);  
        
        this.UpdateClass(sender,elementToChange);
    }

      row_div.appendChild(moveUpMethodButton);
      row_div.appendChild(document.createElement('br'));

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
        this.UpdateClass(sender,elementToChange);

      };
      row_div.appendChild(input_visibility);

      let deleteMethodButton = document.createElement('button');
      deleteMethodButton.innerText = 'x';
      deleteMethodButton.style.float = 'right';
      deleteMethodButton.style.marginRight = '10px';


        deleteMethodButton.onclick = () => {
          elementToChange.DeleteMethod(method);  
          this.UpdateClass(sender,elementToChange);
          }



      row_div.appendChild(deleteMethodButton);
      row_div.appendChild(document.createElement('br'));



      //name
      let name_p = document.createElement("p");
      name_p.style.display = "inline";
      name_p.innerText = " Name: "
      row_div.appendChild(name_p);

      let input_name = document.createElement("input");
      input_name.type = "text";
      input_name.value = method.getName();

      input_name.onchange = () => {
        if (elementToChange !== null) {
          elementToChange.methods[index].setName(input_name.value);
        }

        //Update Cell
        this.UpdateClass(sender,elementToChange);

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

        this.UpdateClass(sender,elementToChange);

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

          let deleteFunctionArgumentButton = document.createElement('button');
          deleteFunctionArgumentButton.innerText = 'x';
          deleteFunctionArgumentButton.style.float = 'right';
          deleteFunctionArgumentButton.style.marginRight = '50px';


          deleteFunctionArgumentButton.onclick = () => {
            method.DeleteAttribute(argument);

            
            this.UpdateClass(sender,elementToChange);
          }

          container_div.appendChild(deleteFunctionArgumentButton);

          //argument Name
          let argumentName_p = document.createElement("p");
          argumentName_p.style.display = "inline";
          argumentName_p.innerText = ' Argument Name: '
          functionArgumentDiv.appendChild(argumentName_p);

          let input_argument_name = document.createElement("input");
          input_argument_name.type = "text";
          input_argument_name.value = argument.getName();

          input_argument_name.onchange = () => {
              argument.setName(input_argument_name.value);
            
          //Update Cell
          this.UpdateClass(sender,elementToChange);

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
            

            this.UpdateClass(sender,elementToChange);

          }
          functionArgumentDiv.appendChild(input_argument_dataType);
          container_div.appendChild(functionArgumentDiv);

          }   
        }

        let newFunctionArgumentButton = document.createElement('button');
        newFunctionArgumentButton.innerText = '+';
        newFunctionArgumentButton.onclick = () =>{

            method.attributeList?.push(new Attribute('function','return value','+'));

            this.UpdateClass(sender,elementToChange);
       }


       container_div.appendChild(newFunctionArgumentButton);

       let moveDownMethodButton = document.createElement('button');
       moveDownMethodButton.innerText = '\\/';
       moveDownMethodButton.style.float = 'right';
       moveDownMethodButton.style.marginRight = '10px';
 
       moveDownMethodButton.onclick = () => {
         elementToChange.ChangeMethodPosition(method,false);  
         
         this.UpdateClass(sender,elementToChange);
     }
 
       row_div.appendChild(moveDownMethodButton);
       row_div.appendChild(document.createElement('br'));

       

        container_div.appendChild(document.createElement("hr"));
      
      
           



        


    }
  }

    return container_div;
  }


  private UpdateClass(sender,elementToChange){
    this.graph.getModel().beginUpdate();
    ClassUpdateController.updateClassValues(this.graph,sender.cells[0], elementToChange);
    this.graph.getModel().endUpdate();

    let tempSelectedCell = sender.cells[0];
    this.graph.getSelectionModel().clear();
    this.graph.getSelectionModel().addCell(tempSelectedCell);
  }
}
