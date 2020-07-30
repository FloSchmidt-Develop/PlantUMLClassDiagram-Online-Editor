import IClass from "../../../interfaces/class";
import MyObject  from '../../parserRep/myObject';
import ClassUpdateController from '../../controller/classUpdateController';
import DiagramCreator from "../../../helper/diagramCreator";
import Declaration from "../../parserRep/declaration";

export default class {
  graph: any;

  constructor(graph: any) {
    this.graph = graph;
  }

  public createTypeSeclectDiv(
    elementToChange: MyObject,
    sender: any
  ): HTMLTableRowElement {


    //TODO Check IClass for undefined !! 
    let tr1 = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let p = document.createElement("p");

    p.innerText = "Data Type: ";
    td1.appendChild(p);

    let input = document.createElement("input");
    input.style.width = "200px";
    input.value = (elementToChange as MyObject).dataType;
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
        let newElement = elementToChange.cloneModel();
        newElement.dataType = input.value;
        let cls = DiagramCreator.diagram.map(e => e.class_declarations.filter(cls => cls.getName() === newElement.dataType)).flat(1);
      
        if (cls != null && cls.length > 0) {
            let atrs = cls[0].attributes;
            for (let index = 0; index < atrs.length; index++) {
                const atr = atrs[index];
                if(!newElement.declarations.find(e => e.getName() === atr.getName()))
                newElement.declarations.push(new Declaration(atr.getName(),''));
                
            }
        }
        else{
          alert('Class with name: ' + input.value + ' can not be found!!!');
        }

      //Update Cell
      this.graph.getModel().beginUpdate();
      ClassUpdateController.updateClassValues(this.graph,sender.cells[0], newElement);
      this.graph.getModel().endUpdate();
    }

    td2.appendChild(input);
    td2.appendChild(datalist);
    tr1.appendChild(td1);
    tr1.appendChild(td2);

    return tr1;
  }
}
