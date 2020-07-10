import IName from "../../interfaces/named";
import ClassUpdateController from '../../classes/controller/classUpdateController';
import ElementUpdateController from '../../classes/controller/elementUpdateController';
import Class from '../../classes/parserRep/class';




export default class NameInputCreator {
  graph: any;

  constructor(graph: any) {
    this.graph = graph;
  }

  public createNameInputDiv(
    selectedElement: IName,
    sender: any
  ): HTMLTableRowElement {
    
    let tr1 = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let p = document.createElement("p");

    p.innerHTML = "Name: ";
    td1.appendChild(p);

    let input2 = document.createElement("input");
    input2.type = "text";
    input2.value = selectedElement.getName();

    input2.onchange = () => {
      var elementToChange = selectedElement;
      if (elementToChange !== null) {
        if(!this.validateName(input2.value))
          elementToChange.setName(input2.value);
        else
          alert('Class Name shouldn´t contain special Characters');
      }
      

      //Update Cell
      this.graph.getModel().beginUpdate();

      //Update Cell size if selected element is Class
      if(elementToChange instanceof Class){
        ClassUpdateController.updateClassValues(this.graph,sender.cells[0], elementToChange as Class);
      }
      //otherwise Only update Element
      else{
        ElementUpdateController.updateElement(this.graph,sender.cells[0],elementToChange);
      }
      this.graph.getModel().endUpdate();


    };

    td2.appendChild(input2);
    tr1.appendChild(td1);
    tr1.appendChild(td2);
    return tr1;

    
  }

  public validateName(name: string): boolean{
    var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return format.test(name);
  }

}
