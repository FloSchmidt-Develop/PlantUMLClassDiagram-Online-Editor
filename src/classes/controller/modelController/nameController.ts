import INamed from "../../../interfaces/named";
import ElementUpdateController from "../elementUpdateController";
import Class from "../../parserRep/class";
import DiagramCreator from "../../../helper/diagramCreator";
import Package from "../../parserRep/package";

export default class NameChangeController{
    namedElementToChange: INamed;
    graph: any;
    cell: any;

    constructor(namedElementToChange: INamed, cell: any, graph: any) {
        this.namedElementToChange = namedElementToChange;
        this.graph = graph;
        this.cell = cell;
    }

    public updateName(name: string){
        let newElement = this.namedElementToChange.cloneModel();
        if(this.validateName(name)){
            alert('Name shouldn´t contain special Characters');
            return;
          }
          if(this.namedElementToChange instanceof Class && DiagramCreator.diagram[DiagramCreator.activeIndex]
            .class_declarations.find(e => e.getName() === name)){
            alert('Class Name: ' + name + ' should be unique');
            return;
          }
          if(this.namedElementToChange instanceof Package && DiagramCreator.diagram[DiagramCreator.activeIndex]
            .package_declarations.find(e => e.getName() === name)){
            alert('Package Name: ' + name + ' should be unique');
            return;
          }
          //Check for unique name
          newElement.setName(name);
          this.updateGraphElement(newElement);
    }

    private cloneModel(elementToClone: INamed): INamed{
        return elementToClone.cloneModel();
    }

    private updateGraphElement(element){
        this.graph.getModel().beginUpdate();
        ElementUpdateController.updateElement(this.graph, this.cell, element);
        this.graph.getModel().endUpdate();
    }

    public validateName(name: string): boolean{
        var format = /[ `!@#$%^&*()+\-=\[\]{};':"\\|,.<>\/?~]/;
        return format.test(name);
      }

}