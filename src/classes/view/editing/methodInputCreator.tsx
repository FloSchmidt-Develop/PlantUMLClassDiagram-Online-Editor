import IClass, { Visibility, Modifiers } from "../../../interfaces/class";
import ClassUpdateController from '../../controller/classUpdateController';
import Attribute from "../../parserRep/attribute";
import Class from "../../parserRep/class";
import DiagramCreator from "../../../helper/diagramCreator";


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
      moveUpMethodButton.disabled = index === 0 ? true : false;

      moveUpMethodButton.onclick = () => {
        let newElement = (elementToChange as IClass).cloneModel();
        newElement.ChangeMethodPosition(method,true);  
        
        this.UpdateClass(sender,newElement);
    }

      row_div.appendChild(moveUpMethodButton);
      row_div.appendChild(document.createElement('br'));

      //visibility
      let td1 = document.createElement("div");
      td1.style.display = 'flex';
      let p = document.createElement("div");
  
      p.innerText = "Visibility: ";
      td1.appendChild(p);

      let select = document.createElement("select");
      select.id = "visibility-method-select" + index;
      select.style.width = "100px";
  
      let option_private = document.createElement("option");
      option_private.value = 'private'
      let private_text = document.createTextNode("private");
      option_private.appendChild(private_text);
  
      let option_protected = document.createElement("option");
      option_protected.value = "protected";
      let protected_text = document.createTextNode("protected");
      option_protected.appendChild(protected_text);
  
      let option_package = document.createElement("option");
      option_package.value = "package";
      let package_text = document.createTextNode("package private");
      option_package.appendChild(package_text);
  
      let option_public = document.createElement("option");
      option_public.value = "public";
      let public_text = document.createTextNode("public");
      option_public.appendChild(public_text);
  
      select.appendChild(option_private);
      select.appendChild(option_protected);
      select.appendChild(option_package);
      select.appendChild(option_public);

      select.selectedIndex =
      elementToChange.methods[index].visibility === Visibility.private
        ? 0
        : elementToChange.methods[index].visibility === Visibility.protected
        ? 1
        : elementToChange.methods[index].visibility === Visibility.package
        ? 2
        : elementToChange.methods[index].visibility === Visibility.public
        ? 3
        : 0;

        select.onchange = () => {
          let newElement = (elementToChange as IClass).cloneModel();
          if (newElement !== null) {
            newElement.methods[index].visibility = 
              Visibility[(document.getElementById("visibility-method-select" + index) as HTMLSelectElement).value];

              this.UpdateClass(sender,newElement)
          }
  
      //Update Cell

      };

      td1.appendChild(select)

      row_div.appendChild(td1);
      //row_div.appendChild(document.createElement('br'));

      //modifier
      let td2 = document.createElement("div");
      td2.style.display = 'flex';
      let p2 = document.createElement("div");
  
      p2.innerText = "Modifier: ";
      td2.appendChild(p2);

      let select2 = document.createElement("select");
      select2.id = "Modifier-method-select" + index;
      select2.style.width = "100px";
  
      let option_none = document.createElement("option");
      option_none.value = 'none'
      let none_text = document.createTextNode("none");
      option_none.appendChild(none_text);
  
      let option_abstract = document.createElement("option");
      option_abstract.value = "abstract";
      let abstract_text = document.createTextNode("abstract");
      option_abstract.appendChild(abstract_text);
  
      let option_static = document.createElement("option");
      option_static.value = "static";
      let static_text = document.createTextNode("static");
      option_static.appendChild(static_text);
  

  
      select2.appendChild(option_none);
      select2.appendChild(option_abstract);
      select2.appendChild(option_static);

      select2.selectedIndex =
      elementToChange.methods[index].modifiers === Modifiers.none
        ? 0
        : elementToChange.methods[index].modifiers === Modifiers.abstract
        ? 1
        : elementToChange.methods[index].modifiers === Modifiers.static
        ? 2
        : 0;

        select2.onchange = () => {
          let newElement = (elementToChange as IClass).cloneModel();
          if (newElement !== null) {
            
            newElement.methods[index].modifiers = 
              Modifiers[(document.getElementById("Modifier-method-select" + index) as HTMLSelectElement).value];

              this.UpdateClass(sender,newElement)
          }
          //Update Cell
         
        };
        td2.appendChild(p2);
        td2.appendChild(select2);
        row_div.appendChild(td2);

    let deleteMethodButton = document.createElement('button');
    deleteMethodButton.innerText = 'x';
    deleteMethodButton.style.float = 'right';
    deleteMethodButton.style.marginRight = '10px';


      deleteMethodButton.onclick = () => {
        let newElement = (elementToChange as IClass).cloneModel();
        newElement.DeleteMethod(method);  
        this.UpdateClass(sender,newElement);
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
        let newElement = (elementToChange as IClass).cloneModel();
        if (newElement !== null) {
          if(this.validateName(input_name.value)){
            alert('Name shouldn´t contain special Characters');
            return;
          }
          newElement.methods[index].setName(input_name.value);
          //Update Cell
          this.UpdateClass(sender,newElement);
        }



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
        let newElement = (elementToChange as IClass).cloneModel();
        if (newElement !== null) {
          newElement.methods[index].setDataType(input_type.value);
          this.UpdateClass(sender,newElement);
        }

        

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
            

            let newElement = (elementToChange as IClass).cloneModel();
            let newMethode = newElement.methods.find(e => e.id === method.id);
            if(newMethode != null){
              newMethode.DeleteAttribute(argument);
              this.UpdateClass(sender,newElement);
            }

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
            let newElement = (elementToChange as IClass).cloneModel();
            let newMethode = newElement.methods.find(e => e.id === method.id);
            
            if(newMethode != null){

              let newArgument = newMethode.attributeList?.find(e => e.id === argument.id);
              if(newArgument != null){
                if(this.validateName(input_argument_name.value)){
                  alert('Name shouldn´t contain special Characters');
                  return;
                }
                newArgument.setName(input_argument_name.value);
                this.UpdateClass(sender,newElement);
              }
            }

              
          

          //Update Cell
          

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
            let newElement = (elementToChange as IClass).cloneModel();
            let newMethode = newElement.methods.find(e => e.id === method.id);
            
            if(newMethode != null){

              let newArgument = newMethode.attributeList?.find(e => e.id === argument.id);
              if(newArgument != null){

                newArgument.setDataType(input_argument_dataType.value);
                this.UpdateClass(sender,newElement);
              }
            }

          }
          functionArgumentDiv.appendChild(input_argument_dataType);
          container_div.appendChild(functionArgumentDiv);

          }   
        }

        let newFunctionArgumentButton = document.createElement('button');
        newFunctionArgumentButton.innerText = '+';
        newFunctionArgumentButton.onclick = () =>{
          let newElement = (elementToChange as IClass).cloneModel();
          let newMethode = newElement.methods.find(e => e.id === method.id);
          
          if(newMethode != null){
            newMethode.attributeList?.push(new Attribute('function','return value',Visibility.public,Modifiers.none));
            this.UpdateClass(sender,newElement);
          }
       }


       container_div.appendChild(newFunctionArgumentButton);

       let moveDownMethodButton = document.createElement('button');
       moveDownMethodButton.innerText = '\\/';
       moveDownMethodButton.style.float = 'right';
       moveDownMethodButton.style.marginRight = '10px';
       moveDownMethodButton.disabled = index >= elementToChange.methods.length - 1 ? true : false;
 
       moveDownMethodButton.onclick = () => {
        let newElement = (elementToChange as IClass).cloneModel();
        newElement.ChangeMethodPosition(method,false);  
         
         this.UpdateClass(sender,newElement);
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

  private validateName(name: string): boolean{
    var format = /[ `!@#$%^&*()+\-=\[\]{};':"\\|,.<>\/?~]/;
    return format.test(name);
  }
}
