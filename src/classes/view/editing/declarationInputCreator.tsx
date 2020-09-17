import ClassController from "../../controller/modelController/classConntroller";
import Class from "../../model/class";


export default class DeclarationInputCreator {
  controller: ClassController;

  constructor(controller: ClassController) {
    this.controller = controller;
  }

  public createNameInputDiv(elementToChange: Class): HTMLDivElement {
    let container_div = document.createElement("div");

    if(elementToChange !== null && elementToChange.declarations !== null && typeof elementToChange.declarations !== 'undefined'){


    for (let index = 0; index < elementToChange.declarations.length; index++) {
      const declaration = elementToChange.declarations[index];
      let row_div = document.createElement("div");
      row_div.style.minHeight = '100px';

      let moveUpDeclarationButton = document.createElement('button');
      moveUpDeclarationButton.innerText = '/\\';
      moveUpDeclarationButton.style.float = 'right';
      moveUpDeclarationButton.style.marginRight = '10px';
      moveUpDeclarationButton.disabled = index === 0 ? true : false;

      moveUpDeclarationButton.onclick = () => {
        this.controller.ChangeDeclarationPosition(declaration,true);
    }

      row_div.appendChild(moveUpDeclarationButton);
      row_div.appendChild(document.createElement('br'));

      let deleteMethodButton = document.createElement('button');
      deleteMethodButton.innerText = 'x';
      deleteMethodButton.style.float = 'right';
      deleteMethodButton.style.marginRight = '10px';


        deleteMethodButton.onclick = () => {
          this.controller.DeleteDeclaration(declaration)
        }



      row_div.appendChild(deleteMethodButton);
      row_div.appendChild(document.createElement('br'));

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
        this.controller.updateDeclarationName(index,input_name.value);
      };

      row_div.appendChild(document.createElement('br'));

      //DataType
      let type_p = document.createElement("p");
      type_p.style.display = "inline";
      type_p.innerText = " value: ";
      row_div.appendChild(type_p);

      let input_type = document.createElement("input");
      input_type.type = "text";
      input_type.value = declaration.declaration_value

      input_type.onchange = () => {
       this.controller.updateDeclarationValue(index,input_type.value);
      };
      row_div.appendChild(input_type);

      let moveDownDeclarationButton = document.createElement('button');
      moveDownDeclarationButton.innerText = '\\/';
      moveDownDeclarationButton.style.float = 'right';
      moveDownDeclarationButton.style.marginRight = '10px';
      moveDownDeclarationButton.disabled = index >= elementToChange.declarations.length - 1 ? true : false;

      moveDownDeclarationButton.onclick = () => {
        this.controller.ChangeDeclarationPosition(declaration,false);
    }

      row_div.appendChild(moveDownDeclarationButton);
      row_div.appendChild(document.createElement('br'));


      container_div.appendChild(row_div);
      container_div.appendChild(document.createElement("hr"));
    }
  }

    return container_div;
  }

}
