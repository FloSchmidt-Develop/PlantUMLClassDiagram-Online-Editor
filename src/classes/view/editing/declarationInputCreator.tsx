import IClass from "../../../interfaces/class";
import ClassUpdateController from '../../controller/classUpdateController';


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
      row_div.style.minHeight = '100px';

      let moveUpDeclarationButton = document.createElement('button');
      moveUpDeclarationButton.innerText = '/\\';
      moveUpDeclarationButton.style.float = 'right';
      moveUpDeclarationButton.style.marginRight = '10px';
      moveUpDeclarationButton.disabled = index === 0 ? true : false;

      moveUpDeclarationButton.onclick = () => {
        let newElement = elementToChange.cloneModel();
        newElement.ChangeDeclarationPosition(declaration,true);  
        
        this.UpdateClass(sender,newElement);
    }

      row_div.appendChild(moveUpDeclarationButton);
      row_div.appendChild(document.createElement('br'));

      let deleteMethodButton = document.createElement('button');
      deleteMethodButton.innerText = 'x';
      deleteMethodButton.style.float = 'right';
      deleteMethodButton.style.marginRight = '10px';


        deleteMethodButton.onclick = () => {
          let newElement = elementToChange.cloneModel();
          newElement.DeleteDeclaration(declaration);  

          this.UpdateClass(sender,newElement);
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

        if (elementToChange !== null) {
          console.log('clone Object');
          
          let newElement = (elementToChange as IClass).cloneModel();
          newElement.setName( elementToChange.getName());
          newElement.dataType = elementToChange.dataType;
          if(this.validateName(input_name.value)){
            alert('Name shouldn´t contain special Characters');
            return;
          }
          
          
          newElement.declarations[index].setName(input_name.value);

          this.UpdateClass(sender,newElement);
        }
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
        if (elementToChange !== null) {
          let newElement = elementToChange.cloneModel();

          newElement.declarations[index].setDeclarationValue(input_type.value);

        this.UpdateClass(sender,newElement);
        }

        
      };
      row_div.appendChild(input_type);

      let moveDownDeclarationButton = document.createElement('button');
      moveDownDeclarationButton.innerText = '\\/';
      moveDownDeclarationButton.style.float = 'right';
      moveDownDeclarationButton.style.marginRight = '10px';
      moveDownDeclarationButton.disabled = index >= elementToChange.declarations.length - 1 ? true : false;

      moveDownDeclarationButton.onclick = () => {
        let newElement = elementToChange.cloneModel();
        newElement.ChangeDeclarationPosition(declaration,false);  
        
        this.UpdateClass(sender,newElement);
    }

      row_div.appendChild(moveDownDeclarationButton);
      row_div.appendChild(document.createElement('br'));


      container_div.appendChild(row_div);
      container_div.appendChild(document.createElement("hr"));
    }
  }

    return container_div;
  }

  private UpdateClass(sender,elementToChange: IClass){
    
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
