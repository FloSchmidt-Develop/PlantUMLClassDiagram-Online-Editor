import Diagram from '../classes/parserRep/diagram';
import IDiagram from '../interfaces/diagram';
import IClass from '../interfaces/class';
import IConnection from '../interfaces/connection';

import Class from '../classes/parserRep/class';
import MyObject from '../classes/parserRep/object';
import Attribute from '../classes/parserRep/attribute';
import Method from '../classes/parserRep/method';
import Connection from '../classes/parserRep/connection';
import Declaration from '../classes/parserRep/declaration';
import { EROFS } from 'constants';
import Package from '../classes/parserRep/package';

export default class DiagramCreator{

    public static diagram: IDiagram[] = [];
    public static activeIndex: number = 0;
 
    constructor(){
    }

    createDiagram(serverResponse: any, diagramName: string): any{
        console.log(serverResponse);
        if(DiagramCreator.diagram[DiagramCreator.activeIndex] == null)
            DiagramCreator.diagram[DiagramCreator.activeIndex] = new Diagram(diagramName);
        
        if(
        serverResponse !== null &&
        serverResponse.Res !== null &&
        serverResponse.Res.diagram !== null )
        {
            console.log(serverResponse.Res.diagram);
            DiagramCreator.diagram[DiagramCreator.activeIndex].name = diagramName;
            
            let jsonDiagram = serverResponse.Res.diagram;
            //check if the server result contains classes
            if(jsonDiagram.class_declaration !== null){        
               this.addClasses(jsonDiagram.class_declaration, DiagramCreator.diagram[DiagramCreator.activeIndex]);    

            }     
            if(jsonDiagram.connection_declaration !== null){
                
                this.addConnections(jsonDiagram.connection_declaration, DiagramCreator.diagram[DiagramCreator.activeIndex]);
            }

        }
        console.log('diagram creator');
        console.log(DiagramCreator.diagram);
        
        return DiagramCreator.diagram[DiagramCreator.activeIndex];
    }

    private addConnections(jsonConnections: any, diagram: IDiagram){
        for (let index = 0; index < jsonConnections.length; index++) {
            const jsonConnection = jsonConnections[index];

            let con = new Connection(jsonConnection.connector,
                jsonConnection.multiplicity_left,
                jsonConnection.multiplicity_right,
                jsonConnection.left, jsonConnection.right, 
                jsonConnection.stereotype);

            diagram.addConnection(con);
            
        }
    }

    private addClasses( jsonClasses : any , diagram : IDiagram  ) : void{

        for (let index = 0; index < jsonClasses.length; index++) {
            var jasonClass = jsonClasses[index];
            
            let cls;
            if(jasonClass.type !== 'object') 
                cls = new Class(jasonClass.name, jasonClass.type);
            else{
                cls = new MyObject(jasonClass.name, jasonClass.type);
            }
            cls.alias = jasonClass.alias ? jasonClass.alias : jasonClass.name;
            cls.package = jasonClass.package ? jasonClass.package : '';

            if(jasonClass.hight != null)
                cls.hight = parseInt(jasonClass.hight);
            if(jasonClass.width != null)
                cls.width = parseInt(jasonClass.width);
            if(jasonClass.x != null)
                cls.x = parseInt(jasonClass.x);
            if(jasonClass.y != null)
                cls.y = parseInt(jasonClass.y);
            
            console.log('-----Class-------');
            console.log(cls);
            
            
            
            
            let newPackage = new Package(cls.package);
            let resPackage = diagram.addPackage(newPackage);
            if(resPackage != null)
                resPackage.AddClassReference(cls);

            if (jsonClasses[index].attributes !== null) {
                this.addAttributes(jsonClasses[index].attributes, cls)
            }

            if (jsonClasses[index].methodes !== null) {
                this.addMethods(jsonClasses[index].methodes, cls)
            }

            if(jsonClasses[index].declarations !== null){
                this.addDeclarations(jsonClasses[index].declarations, cls)
            }

            diagram.addClass(cls);         
        }

    }
    /**
     * Gets Attributes from JSON Object and adds them to a Class
     * @param jsonAttributes 
     * @param tempClass 
     */
    private addAttributes(jsonAttributes: any, tempClass : IClass): void{
        for (let index = 0; index < jsonAttributes.length; index++) {
            let jsonAttribute = jsonAttributes[index];

            let attr = new Attribute(jsonAttribute.name, jsonAttribute.dataType, jsonAttribute.visibility);
            tempClass.AddAttribute(attr);
            
        }
    }

    private addDeclarations(jsonDeclarations: any, tempClass : IClass): void{

            for (let index = 0; index < jsonDeclarations.length; index++) {
                if(tempClass.type === 'object'){
                let jsonDeclaration = jsonDeclarations[index];
    
                let declaration = new Declaration(jsonDeclaration.name,jsonDeclaration.attribute);
                tempClass.declarations.push(declaration);
                }
                else{
                    throw Error("class must not have declarations")
                }

                
            }
    }

    private addMethods(jsonMethods: any, tempClass : IClass) : void{
        for (let index = 0; index < jsonMethods.length; index++) {
            let jsonMethod = jsonMethods[index];

            let meth = new Method(jsonMethod.name, jsonMethod.visibility);
            meth.dataType = jsonMethod.dataType ? jsonMethod.dataType : '';


            if(jsonMethod.attributeList !== null){
                for (let index = 0; index < jsonMethod.attributeList.length; index++) {
                    const attr = jsonMethod.attributeList[index];
                    meth.attributeList.push(new Attribute(attr.name, attr.dataType, attr.visibility));
                    
                }
            }


            tempClass.AddMethods(meth)
            
        }
    }

}

