import IClass from "../../../interfaces/class";
import ClassUpdateController from '../../controller/classUpdateController';
import DiagramCreator from "../../../helper/diagramCreator";
import Declaration from "../../parserRep/declaration";
import ClassController from "../../controller/modelController/classConntroller";

export default class {
  controller: ClassController

  constructor(controller: ClassController) {
    this.controller = controller;
  }

  public createTypeSeclectDiv(elementToChange: IClass): HTMLTableRowElement {


    //TODO Check IClass for undefined !! 
    let tr1 = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let p = document.createElement("p");

    p.innerText = "Data Type: ";
    td1.appendChild(p);

    let input = document.createElement("input");
    input.style.width = "200px";
    input.value = (elementToChange as IClass).dataType;
    let datalist = document.createElement("dataList");
    datalist.id = "datalist";
    input.setAttribute('list','datalist');

    let diagrams = DiagramCreator.diagram;
    let classes = diagrams.map(e => e.class_declarations.filter(cls => cls.type === 'class')).flat(1);
    
    for (let index = 0; index < classes.length; index++) {
        const tempCls = classes[index];

        let option_class = document.createElement("option");
        option_class.value = tempCls.getName();
        let class_text = document.createTextNode(tempCls.getName());
        option_class.appendChild(class_text);
        datalist.appendChild(option_class);
        
    }
    

    input.onchange = () => {
      this.controller.UpdateObjectDataType(input.value);
    }

    td2.appendChild(input);
    td2.appendChild(datalist);
    tr1.appendChild(td1);
    tr1.appendChild(td2);

    return tr1;
  }
}
