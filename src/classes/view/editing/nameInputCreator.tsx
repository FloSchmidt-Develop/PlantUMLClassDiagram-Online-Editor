import IName from "../../../interfaces/named";
import ClassUpdateController from '../../controller/classUpdateController';
import ElementUpdateController from '../../controller/elementUpdateController';
import Class from '../../parserRep/class';
import Diagram from "../../parserRep/diagram";
import DiagramCreator from "../../../helper/diagramCreator";
import Package from "../../parserRep/package";
import NameChanger from "../../controller/nameChanger";
import Clonable from "../../../interfaces/cloneable";




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
      var newElement: IName;
      if (elementToChange !== null) {
        if(this.validateName(input2.value)){
          alert('Name shouldn´t contain special Characters');
          return;
        }
        if(selectedElement instanceof Class && DiagramCreator.diagram[DiagramCreator.activeIndex]
          .class_declarations.find(e => e.getName() === input2.value)){
          alert('Class Name: ' + input2.value + ' should be unique');
          return;
        }
        if(selectedElement instanceof Package && DiagramCreator.diagram[DiagramCreator.activeIndex]
          .package_declarations.find(e => e.getName() === input2.value)){
          alert('Package Name: ' + input2.value + ' should be unique');
          return;
        }
        //Check for unique name
        newElement = (elementToChange as IName).cloneModel();
        newElement.setName(input2.value);
        console.log('name Change');
        console.log(newElement);
        

        //this.graph.model.execute(new NameChanger(elementToChange,input2.value));

        //Update Cell
        this.graph.getModel().beginUpdate();

        //Update Cell size if selected element is Class
        if(newElement instanceof Class){
          ClassUpdateController.updateClassValues(this.graph,sender.cells[0], newElement as Class);
        }
        //otherwise Only update Element
        else{
          ElementUpdateController.updateElement(this.graph,sender.cells[0],newElement);
        }
        this.graph.getModel().endUpdate();
        
      }
      




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
