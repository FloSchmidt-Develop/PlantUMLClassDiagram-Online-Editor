import { Visibility, Modifiers } from "../../../interfaces/class";

import ClassController from "../../controller/modelController/classConntroller";
import Class from "../../model/class";


export default class AttributeInputCreator {
  controller: ClassController;

  constructor(controller: ClassController) {
    this.controller = controller;
  }

  public createNameInputDiv(elementToChange: Class): HTMLDivElement {
    let container_div = document.createElement("div");
    

    if(elementToChange !== null && elementToChange.attributes !== null && typeof elementToChange.attributes !== 'undefined'){
    container_div.appendChild(document.createElement('hr'));


    for (let index = 0; index < elementToChange.attributes.length; index++) {
      const attribute = elementToChange.attributes[index];
      let row_div = document.createElement("div");

      
      
      let moveUpAttributeButton = document.createElement('button');
      moveUpAttributeButton.innerHTML = '/\\';
      moveUpAttributeButton.style.float = 'right';
      moveUpAttributeButton.style.marginRight = '10px';
      moveUpAttributeButton.disabled = index === 0 ? true : false;

      moveUpAttributeButton.onclick = () => {
        this.controller.ChangeAttributePosition(attribute,true);  
    }

      row_div.appendChild(moveUpAttributeButton);
      row_div.appendChild(document.createElement('br'));

      //visibility
      let td1 = document.createElement("td");
      td1.style.display = 'flex';
      let p = document.createElement("div");
  
      p.innerText = "Visibility: ";
      td1.appendChild(p);

      let select = document.createElement("select");
      select.id = "visibility-attribute-select" + index;
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
      elementToChange.attributes[index].visibility === Visibility.private
        ? 0
        : elementToChange.attributes[index].visibility === Visibility.protected
        ? 1
        : elementToChange.attributes[index].visibility === Visibility.package
        ? 2
        : elementToChange.attributes[index].visibility === Visibility.public
        ? 3
        : 0;

        select.onchange = () => {
          this.controller.updateAttributeVisibility(index,
              Visibility[(document.getElementById( "visibility-attribute-select" + index) as HTMLSelectElement).value]);
        };

        td1.appendChild(select);
        row_div.appendChild(td1);

      //modifier
      let td2 = document.createElement("div");
      td2.style.display = 'flex';
      let p2 = document.createElement("div");

      p2.innerText = "Modifier: ";
      td2.appendChild(p2);

      let select2 = document.createElement("select");
      select2.id = "Modifier-attribute-select" + index;
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
      elementToChange.attributes[index].modifiers === Modifiers.none
        ? 0
        : elementToChange.attributes[index].modifiers === Modifiers.abstract
        ? 1
        : elementToChange.attributes[index].modifiers === Modifiers.static
        ? 2
        : 0;

        select2.onchange = () => {
          this.controller.updateAttributeModifier(index,
              Modifiers[(document.getElementById("Modifier-attribute-select" + index) as HTMLSelectElement).value]);
        };

        td2.appendChild(p2);
        td2.appendChild(select2);
        row_div.appendChild(td2);


      let deleteAttributeButton = document.createElement('button');
      deleteAttributeButton.innerText = 'x';
      deleteAttributeButton.style.float = 'right';
      deleteAttributeButton.style.marginRight = '10px';


      deleteAttributeButton.onclick = () => {
          this.controller.deleteAttribute(attribute);
      }



      row_div.appendChild(deleteAttributeButton);
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
        this.controller.updateAttributeName(index,input_name.value);
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
        this.controller.updateAttributeDataType(index,input_type.value);
      };

      row_div.appendChild(input_type);

      let moveDownAttributeButton = document.createElement('button');
      moveDownAttributeButton.innerText = '\\/';
      moveDownAttributeButton.style.float = 'right';
      moveDownAttributeButton.style.marginRight = '10px';
      moveDownAttributeButton.disabled = index >= elementToChange.declarations.length - 1 ? true : false;

      moveDownAttributeButton.onclick = () => {
        this.controller.ChangeAttributePosition(attribute,false);  
    }

      row_div.appendChild(moveDownAttributeButton);
      row_div.appendChild(document.createElement('br'));


      container_div.appendChild(row_div);
      container_div.appendChild(document.createElement('hr'));
    }
  }

    return container_div;
  }


}
