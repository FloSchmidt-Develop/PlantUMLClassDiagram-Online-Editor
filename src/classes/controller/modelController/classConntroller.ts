
import { Modifiers, Visibility } from "../../../interfaces/class";
import ClassUpdateController from "../classUpdateController";
import Attribute from "../../model/attribute";
import Method from "../../model/method";
import Declaration from "../../model/declaration";
import DiagramCreator from "../../../helper/diagramCreator";
import Class from "../../model/class";


export default class ClassController{
    classToChange: Class;
    graph: any;
    cell: any;

    constructor(elementToChange: Class, cell: any, graph: any){
        this.classToChange = elementToChange;
        this.graph = graph;
        this.cell = cell;
    }


    //============================Attribute==================================
    public updateAttributeModifier(indexOfAttribute: number, value: Modifiers){
        let newElement = this.cloneModel(this.classToChange);
        newElement.attributes[indexOfAttribute].modifiers = value;
        this.updateGraphElement(newElement);
    }

    public updateAttributeVisibility(indexOfAttribute: number, value: Visibility){
        let newElement = this.cloneModel(this.classToChange);
        newElement.attributes[indexOfAttribute].visibility = value;
        this.updateGraphElement(newElement);
    }

    public updateAttributeName(indexOfAttribute: number, value: string){
        let newElement = this.cloneModel(this.classToChange);
        if(this.validateName(value)){
            alert('Attribute Name shouldn´t contain special Characters');
            return;
        }
        newElement.attributes[indexOfAttribute].setName(value);
        this.updateGraphElement(newElement);
    }

    public updateAttributeDataType(indexOfAttribute: number, value: string){
        let newElement = this.cloneModel(this.classToChange);
        newElement.attributes[indexOfAttribute].setDataType(value);
        this.updateGraphElement(newElement);
    }

    public ChangeAttributePosition(attribute: Attribute, up: boolean){
        let newElement = this.cloneModel(this.classToChange);
        let attributeToChangePosition = newElement.attributes.find(e => e.id === attribute.id);
        if(attributeToChangePosition != null){
            let old_index = newElement.attributes.indexOf(attributeToChangePosition);
            let new_index = up ? old_index - 1 : old_index + 1;

            if (new_index >= newElement.attributes.length) {
                var k = new_index - newElement.attributes.length + 1;
                while (k--) {
                    newElement.attributes.push(new Attribute('','',Visibility.undefined,Modifiers.none));
                }
            }
            newElement.attributes.splice(new_index, 0, newElement.attributes.splice(old_index, 1)[0]);
        }
        this.updateGraphElement(newElement);
    }

    public deleteAttribute(attribute: Attribute){
        let newElement = this.cloneModel(this.classToChange);
        newElement.attributes = newElement.attributes.filter(e => e.id != attribute.id);
        newElement.setHight(newElement.getHeight() - 11);
        this.updateGraphElement(newElement);
    }

    public addAttribute(attribute: Attribute){
        let newElement = this.cloneModel(this.classToChange);
        newElement.attributes.push(attribute);
        this.updateGraphElement(newElement);
    }

    //==================Method=======================
    public updateMethodModifier(indexOfMethod: number, value: Modifiers){
        let newElement = this.cloneModel(this.classToChange);
        newElement.methods[indexOfMethod].modifiers = value;
        this.updateGraphElement(newElement);
    }

    public updateMethodVisibility(indexOfMethod: number, value: Visibility){
        let newElement = this.cloneModel(this.classToChange);
        newElement.methods[indexOfMethod].visibility = value;
        this.updateGraphElement(newElement);
    }

    public updateMethodName(indexOfAttribute: number, value: string){
        let newElement = this.cloneModel(this.classToChange);
        if(this.validateName(value)){
            alert('Attribute Name shouldn´t contain special Characters');
            return;
        }
        newElement.methods[indexOfAttribute].setName(value);
        this.updateGraphElement(newElement);
    }

    public updateMethodDataType(indexOfAttribute: number, value: string){
        let newElement = this.cloneModel(this.classToChange);
        newElement.methods[indexOfAttribute].setDataType(value);
        this.updateGraphElement(newElement);
    }

    public ChangeMethodPosition(attribute: Method, up: boolean){
        let newElement = this.cloneModel(this.classToChange);
        let attributeToChangePosition = newElement.methods.find(e => e.id === attribute.id);
        if(attributeToChangePosition != null){
            let old_index = newElement.methods.indexOf(attributeToChangePosition);
            let new_index = up ? old_index - 1 : old_index + 1;

            if (new_index >= newElement.methods.length) {
                var k = new_index - newElement.methods.length + 1;
                while (k--) {
                    newElement.methods.push(new Method('', Visibility.undefined, Modifiers.none));
                }
            }
            newElement.methods.splice(new_index, 0, newElement.methods.splice(old_index, 1)[0]);
        }
        this.updateGraphElement(newElement);
    }

    public deleteMethod(method: Method){
        let newElement = this.cloneModel(this.classToChange);
        newElement.methods = newElement.methods.filter(e => e.id != method.id);
        newElement.setHight(newElement.getHeight() - 11);
        this.updateGraphElement(newElement);
    }

    public addMethod(method: Method){
        let newElement = this.cloneModel(this.classToChange);
        newElement.methods.push(method);
        this.updateGraphElement(newElement);
    }

    public addNewFunctionArgumentToMethod(method: Method){
        let newElement = this.cloneModel(this.classToChange);
        let newMethod = newElement.methods.find(e => e.id === method.id);
          
        if(newMethod != null){
          newMethod.attributeList?.push(new Attribute('function','return value',Visibility.public,Modifiers.none));
          this.updateGraphElement(newElement);
        }
    }

    public deleteFunctionArgumentFromMethod(method: Method, argument: Attribute){
        let newElement = this.cloneModel(this.classToChange);
        let newMethod = newElement.methods.find(e => e.id === method.id);
        if(newMethod != null){
          newMethod.DeleteAttribute(argument);
          this.updateGraphElement(newElement);
        }
    }

    public changeFunctionArgumentNameFromMethod(method: Method, argument: Attribute, value: string){
        let newElement = this.cloneModel(this.classToChange);
        let newMethod = newElement.methods.find(e => e.id === method.id);
            
        if(newMethod != null){

            let newArgument = newMethod.attributeList?.find(e => e.id === argument.id);
            if(newArgument != null){
            if(this.validateName(value)){
                alert('Name shouldn´t contain special Characters');
                return;
            }
            newArgument.setName(value);
            this.updateGraphElement(newElement);
            }
        }
    }

    public changeFunctionArgumentDataTypeFromMethod(method: Method, argument: Attribute, value: string){
        let newElement = this.cloneModel(this.classToChange);
        let newMethod = newElement.methods.find(e => e.id === method.id);
            
        if(newMethod != null){

            let newArgument = newMethod.attributeList?.find(e => e.id === argument.id);
            if(newArgument != null){
                newArgument.setDataType(value);
                this.updateGraphElement(newElement);
            }
        }
    }
    
    //=====================Declaration======================
    public updateDeclarationName(indexOfDeclaration: number, value: string){
        let newElement = this.cloneModel(this.classToChange);
        newElement.declarations[indexOfDeclaration].setName(value);
        this.updateGraphElement(newElement);
    }

    public updateDeclarationValue(indexOfDeclaration: number, value: string){
        let newElement = this.cloneModel(this.classToChange);
        newElement.declarations[indexOfDeclaration].setDeclarationValue(value);
        this.updateGraphElement(newElement);
    }

    public ChangeDeclarationPosition(declaration: Declaration, up: boolean){
        let newElement = this.cloneModel(this.classToChange);
        let declarationToChangePosition = newElement.declarations.find(e => e.id === declaration.id);
        if(declarationToChangePosition != null){
            let old_index = newElement.declarations.indexOf(declarationToChangePosition);
            let new_index = up ? old_index - 1 : old_index + 1;

            if (new_index >= newElement.declarations.length) {
                var k = new_index - newElement.declarations.length + 1;
                while (k--) {
                    newElement.declarations.push(new Declaration('name',''));
                }
            }
            newElement.declarations.splice(new_index, 0, newElement.declarations.splice(old_index, 1)[0]);
        }
        this.updateGraphElement(newElement);
    }

    public AddDeclaration(declaration: Declaration){
        let newElement = this.cloneModel(this.classToChange);
        newElement.declarations.push(declaration);
        this.updateGraphElement(newElement);
    }

    public DeleteDeclaration(declaration: Declaration){
        let newElement = this.cloneModel(this.classToChange);
        newElement.declarations = this.classToChange.declarations.filter(e => e.id != declaration.id);
        newElement.setHight(newElement.getHeight() - 11);
        this.updateGraphElement(newElement);
    }

    public UpdateObjectDataType(value: string){
        let newElement = this.classToChange.cloneModel();
        newElement.dataType = value;
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
          alert('Class with name: ' + value + ' can not be found!!!');
        }
        this.updateGraphElement(newElement);
    }

    public updateClassType(value: string){
        let newElement = this.classToChange.cloneModel();
        newElement.setType(value);
        this.updateGraphElement(newElement);
    }
   
    //======================Private Functions========================
    private cloneModel(elementToClone: Class): Class{
        return elementToClone.cloneModel();
    }

    private updateGraphElement(newClass){
        this.graph.getModel().beginUpdate();
        ClassUpdateController.updateClassValues(this.graph, this.cell, newClass);
        this.graph.getModel().endUpdate();
    }

    private validateName(name: string): boolean{
        var format = /[ `!@#$%^&*()+\-={};':"\\|,.<>\/?~]/;
        return format.test(name);
    }
}