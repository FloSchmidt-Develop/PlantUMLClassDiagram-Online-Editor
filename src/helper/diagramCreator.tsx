import Diagram from '../classes/diagram';
import IDiagram from '../interfaces/diagram'
import IClass from '../interfaces/class'
import Class from '../classes/class'
import Attribute from '../classes/attribute';
import Method from '../classes/method';

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
            if(jsonDiagram.class_declaration !== null){        
               this.addClasses(jsonDiagram.class_declaration, diagram);              
            }     
        }

        return diagram;
    }

    private addClasses( jsonClasses : any , diagram : IDiagram  ) : void{

        for (let index = 0; index < jsonClasses.length; index++) {
            var jasonClass = jsonClasses[index];
            
            let cls = new Class(jasonClass.name, jasonClass.type);
            cls.alias = jasonClass.alias ? jasonClass.alias : '';
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

