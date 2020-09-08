import Diagram from '../classes/parserRep/diagram';
import IDiagram from '../interfaces/diagram';
import IClass, { Visibility, Modifiers } from '../interfaces/class';
import IConnection from '../interfaces/connection';

import Class from '../classes/parserRep/class';
import MyObject from '../classes/parserRep/myObject';
import Attribute from '../classes/parserRep/attribute';
import Method from '../classes/parserRep/method';
import Connection from '../classes/parserRep/connection';
import Declaration from '../classes/parserRep/declaration';
import { EROFS } from 'constants';
import Package from '../classes/parserRep/package';
import Point from '../classes/parserRep/point';
import Note from '../classes/parserRep/note';
import { notDeepEqual } from 'assert';

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
            DiagramCreator.diagram[DiagramCreator.activeIndex].name = diagramName;
            
            let jsonDiagram = serverResponse.Res.diagram;
            //check if the server result contains classes
            if(jsonDiagram.package_declarations != null){
                for (let index = 0; index < jsonDiagram.package_declarations.length; index++) {
                    const pack = jsonDiagram.package_declarations[index];
                    let pak = new Package(pack.name);
                    if(pack.package != null)
                        pak.package = pack.package;
                    if(pack.hight != null)
                        pak.setHight(parseInt(pack.hight));
                    if(pack.width != null)
                        pak.setWidth(parseInt(pack.width));
                    if(pack.x != null)
                        pak.x = parseInt(pack.x);
                    if(pack.y != null)
                        pak.y = parseInt(pack.y);
                    DiagramCreator.diagram[DiagramCreator.activeIndex].addPackage(pak);
                }
                for(let i = 0; i < DiagramCreator.diagram[DiagramCreator.activeIndex].package_declarations.length; i++){
                    let actualPackage = DiagramCreator.diagram[DiagramCreator.activeIndex].package_declarations[i];
                    if(actualPackage.package !== ''){
                        let parentOfPackage = DiagramCreator.diagram[DiagramCreator.activeIndex].package_declarations.
                            find(e => e.getName() === actualPackage.package);
                        if(parentOfPackage != null){
                            parentOfPackage.AddPackageReference(actualPackage);
                        }
                    }
                }


            }
            if(jsonDiagram.note_declarations !== null){
                this.addNotes(jsonDiagram.note_declarations, DiagramCreator.diagram[DiagramCreator.activeIndex]);
            }

            if(jsonDiagram.class_declaration !== null){        
               this.addClasses(jsonDiagram.class_declaration, DiagramCreator.diagram[DiagramCreator.activeIndex]);    

            }     
            if(jsonDiagram.connection_declaration !== null){
                
                this.addConnections(jsonDiagram.connection_declaration, DiagramCreator.diagram[DiagramCreator.activeIndex]);
            }

        }
        return DiagramCreator.diagram[DiagramCreator.activeIndex];
    }

    private addConnections(jsonConnections: any, diagram: IDiagram){
        for (let index = 0; index < jsonConnections.length; index++) {
            const jsonConnection = jsonConnections[index];

            if(!jsonConnection.connector.includes('hidden')){
                
                let con = new Connection(jsonConnection.connector,
                    jsonConnection.multiplicity_left.replace(/"/g,''),
                    jsonConnection.multiplicity_right.replace(/"/g,''),
                    jsonConnection.left, jsonConnection.right, 
                    jsonConnection.stereotype);

                if(jsonConnection.points != null && jsonConnection.points != null){
                    for (let index = 0; index < jsonConnection.points.length; index++) {
                        const pt = jsonConnection.points[index];
                        
                        con.points.push(new Point(pt.x,pt.y));
                        
                    }
                }
                
                diagram.addConnection(con);
            }

            
        }
    }

    private addNotes(jsonNotes: any, diagram: IDiagram) : void{
        for (let index = 0; index < jsonNotes.length; index++) {
            const jsonNote = jsonNotes[index];
            let note = new Note(jsonNote.content);
            if (jsonNote.direction != null) {
                note.direction = jsonNote.direction;
            }
            if (jsonNote.name != null){
                note.setName(jsonNote.name);
            }
            if (jsonNote.relatedTo != null){
                note.relatedTo = jsonNote.relatedTo;
            }
            diagram.addNote(note);
            
        }
    }

    private addClasses( jsonClasses : any , diagram : IDiagram  ) : void{

        for (let index = 0; index < jsonClasses.length; index++) {
            var jsonClass = jsonClasses[index];
            
            let cls;
            if(jsonClass.type !== 'object'){

                if(jsonClass.type === 'class' 
                || jsonClass.type === 'interface' 
                || jsonClass.type == 'abstract' )
                    cls = new Class(jsonClass.name, jsonClass.type);
                else if(jsonClass.type === 'abstractclass')
                    cls = new Class(jsonClass.name, 'abstract');
                //else
                    //TODO Log Parser Result error
            } 

            else{
                cls = new MyObject(jsonClass.name, jsonClass.type);
            }
            cls.alias = jsonClass.alias ? jsonClass.alias : jsonClass.name;
            cls.package = jsonClass.package ? jsonClass.package : '';

            if(jsonClass.hight != null)
                cls.hight = parseInt(jsonClass.hight);
            if(jsonClass.width != null)
                cls.width = parseInt(jsonClass.width);
            if(jsonClass.x != null)
                cls.x = parseInt(jsonClass.x);
            if(jsonClass.y != null)
                cls.y = parseInt(jsonClass.y);
            
            
            
            
            
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
            let visibility = this.getVisibilityFromSymbol(jsonAttribute.visibility);
            let modifiers = this.getModifiersFromString(jsonAttribute.modifiers)

            let attr = new Attribute(jsonAttribute.name, jsonAttribute.dataType, visibility, modifiers);
            tempClass.AddAttribute(attr);
            
        }
    }

    private getVisibilityFromSymbol(symbol: string): Visibility{
        switch(symbol){
            case '-':
                return Visibility.private;
            case '#':
                return Visibility.protected;
            case '~':
                return Visibility.package;
            case '+':
                return Visibility.public;
            default:
                return Visibility.undefined;
        }
    }

    getModifiersFromString(modifiers: string): Modifiers{
        switch(modifiers){
            case '{abstract}':
                return Modifiers.abstract;
            case '{static}':
                return Modifiers.static;
            default:
                return Modifiers.none
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
                    //throw Error("class must not have declarations")
                }

                
            }
    }

    private addMethods(jsonMethods: any, tempClass : IClass) : void{
        for (let index = 0; index < jsonMethods.length; index++) {
            let jsonMethod = jsonMethods[index];

            let visibility = this.getVisibilityFromSymbol(jsonMethod.visibility);
            let modifiers = this.getModifiersFromString(jsonMethod.modifiers);

            let meth = new Method(jsonMethod.name, visibility, modifiers);
            meth.dataType = jsonMethod.dataType ? jsonMethod.dataType : '';


            if(jsonMethod.attributeList !== null){
                for (let index = 0; index < jsonMethod.attributeList.length; index++) {
                    const attr = jsonMethod.attributeList[index];

                    let visibility = this.getVisibilityFromSymbol(attr.visibility);
                    let modifiers = this.getModifiersFromString(attr.modifiers);

                    meth.attributeList.push(new Attribute(attr.name, attr.dataType, visibility, modifiers));
                    
                }
            }


            tempClass.AddMethods(meth)
            
        }
    }

}

