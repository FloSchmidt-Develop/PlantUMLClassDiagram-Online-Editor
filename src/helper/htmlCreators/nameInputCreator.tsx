import IClass from "../../interfaces/class";

export default class NameInputCreator {
  graph: any;

  constructor(graph: any) {
    this.graph = graph;
  }

  public createNameInputDiv(
    selectedClass: IClass,
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
    input2.value = selectedClass.name;

    input2.onchange = () => {
      var classToChange = selectedClass;
      if (classToChange !== null) {
        classToChange.setName(input2.value);
      }
      
      //Update Cell
      this.graph.getModel().beginUpdate();
      this.graph.model.setValue(sender.cells[0], classToChange);
      this.graph.getModel().endUpdate();
    };

    td2.appendChild(input2);
    tr1.appendChild(td1);
    tr1.appendChild(td2);
    return tr1;
  }
}
