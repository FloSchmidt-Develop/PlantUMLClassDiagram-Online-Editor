import Diagram from '../classes/parserRep/diagram';
import IDiagram from '../interfaces/diagram'
import IClass from '../interfaces/class';
import IConnection from '../interfaces/connection';

import Class from '../classes/parserRep/class'
import Attribute from '../classes/parserRep/attribute';
import Method from '../classes/parserRep/method';
import Connection from '../classes/parserRep/connection';

export default class DiagramCreator{
 
    constructor(){
    }

    createDiagram(serverResponse: any): IDiagram{
        console.log(serverResponse);
        
        var diagram = new Diagram();
        if(
        serverResponse !== null &&
        serverResponse.Res !== null &&
        serverResponse.Res.diagram !== null )
        {
            let jsonDiagram = serverResponse.Res.diagram;
            //check if the server result contains classes
            if(jsonDiagram.class_declaration !== null){        
               this.addClasses(jsonDiagram.class_declaration, diagram);              
            }     
            if(jsonDiagram.connection_declaration !== null){
                console.log(jsonDiagram.connection_declaration);
                
                this.addConnections(jsonDiagram.connection_declaration, diagram);
            }

        }

        return diagram;
    }

    private addConnections(jsonConnections: any, diagram: IDiagram){
        for (let index = 0; index < jsonConnections.length; index++) {
            const jsonConnection = jsonConnections[index];

            let con = new Connection(jsonConnection.connector,
                jsonConnection.multiplicity_left,
                jsonConnection.multiplicity_right,
                jsonConnection.left, jsonConnection.right);

            diagram.addConnection(con);
            
        }
    }

    private addClasses( jsonClasses : any , diagram : IDiagram  ) : void{

        for (let index = 0; index < jsonClasses.length; index++) {
            var jasonClass = jsonClasses[index];
            
            let cls = new Class(jasonClass.name, jasonClass.type);
            cls.alias = jasonClass.alias ? jasonClass.alias : jasonClass.name;
            cls.package = jasonClass.package ? jasonClass.package : '';

            if (jsonClasses[index].attributes !== null) {
                this.addAttributes(jsonClasses[index].attributes, cls)
            }

            if (jsonClasses[index].methodes !== null) {
                this.addMethods(jsonClasses[index].methodes, cls)
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
            tempClass.attributes.push(attr);
            
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


            tempClass.methodes.push(meth);
            
        }
    }

}

