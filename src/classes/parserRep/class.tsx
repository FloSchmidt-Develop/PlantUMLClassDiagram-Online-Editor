import IClass, { Visibility, Modifiers } from '../../interfaces/class'
import IAttribute from '../../interfaces/attribute'
import IMethod from '../../interfaces/methode'
import IDeclaration from '../../interfaces/declaration'
import Attribute from './attribute';
import Method from './method';
import ObserverSubject from './subject'
import Declaration from './declaration';
import DiagramCreator from '../../helper/diagramCreator';



export default class Class extends ObserverSubject<string> implements IClass  {
    public attributes: IAttribute[] = [];
    public methods: IMethod[] = [];
    public declarations: IDeclaration[] = [];
    protected name: string;
    public package: string = '';
    public type: string;
    public alias: string = '';
    public x: number = 0;
    public y: number = 0;
    protected width = 250;
    protected hight = 100;
    public dataType: string = '';

    constructor(name: string, type: string){
        super();
        this.name = name;
        this.type = type;
        this.alias = this.name;
    }

    public setName(newName: string){
        let temp = newName;
        this.alias = newName;
        this.NotifyObservers(this.name,temp);
        this.name = temp;
    }

    public getName(): string{
        return this.name;
    }

    public setType(newType: string){
        this.type = newType;
    }

    public setWidth(width: number){
        if(width != null)
            this.width = width;
        
    }

    public setHight(hight: number){
        if(hight != null)
            this.hight = hight;

    }

    public getWidth(): number{
        let max = this.width; // min width

        //charakters in name + (image_width + margin) * 2
        let lengthName = (((this.name.length + this.dataType.length) * 14) + 120) * 0.7;
        if(lengthName > max){   
            max = lengthName;
        }
        
        for (let index = 0; index < this.attributes.length; index++) {
            let attribute = this.attributes[index];
            if(attribute.getWidth() > max){
                max = attribute.getWidth();
            }
        }

        for (let index = 0; index < this.methods.length; index++) {
            let method = this.methods[index];
            if(method.getWidth() > max){
                max = method.getWidth();
            }
            
        }

        for (let index = 0; index < this.declarations.length; index++) {
            let declaration = this.declarations[index];
            if(declaration.getWidth() > max){
                max = declaration.getWidth(); 
            }
        }
        this.setWidth(max);
        return max;
    }

    public getHeight(): number {

        let newHight = 100
        + (this.attributes.length * 11) 
        + (this.methods.length * 11) 
        + (this.declarations.length * 11) 
        - (this.attributes.length !== 0 ? 3 : 0) 
        - (this.methods.length !== 0 ? 3 : 0);

        let result =  newHight > this.hight ? newHight : this.hight;        
        return result;
    }

    public cloneModel(): IClass{
        let newClass = new Class(this.name, this.type);
        
        newClass.attributes = this.attributes.map( e => e.cloneModel() );
        newClass.methods = this.methods.map( e => e.cloneModel());
        newClass.declarations = this.declarations.map(e => e.cloneModel());
        newClass.x = this.x;
        newClass.y = this.y;
        newClass.setHight(this.getHeight());
        newClass.setWidth(this.getWidth());
        newClass.package = this.package;
        if(this.package !== ''){
            let parentPackage = DiagramCreator.diagram[DiagramCreator.activeIndex].package_declarations.find(e => e.getName() === this.package);
            parentPackage?.RemoveClassReference(this,true);
            parentPackage?.AddClassReference(newClass);
        }
        newClass.observers = this.observers;
        newClass.dataType = this.dataType; 
        console.log(this);
        

        return newClass;
    }

}
