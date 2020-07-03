import IClass from '../../interfaces/class'
import IAttribute from '../../interfaces/attribute'
import IMethod from '../../interfaces/methode'
import IDeclaration from '../../interfaces/declaration'
import ID from './id';
import Attribute from './attribute';
import Method from './method';


export default class Class extends ID implements IClass {
    public attributes: IAttribute[] = [];
    public methods: IMethod[] = [];
    public declarations: IDeclaration[] = [];
    private name: string;
    public package: string = '';
    public type: string;
    public alias: string = '';
    public x: number = 0;
    public y: number = 0;
    private width = 250;
    private hight = 100;
    //public diagram: IAddOnlyDiagram;

    constructor(name: string, type: string){
        super();
        this.name = name;
        this.type = type;
        this.alias = this.id;
        //this.diagram = diagram;
    }

    public setName(newName: string){
        this.name = newName;
    }

    public getName(): string{
        return this.name;
    }

    public setType(newType: string){
        this.type = newType;
    }

    public AddMethods(method:IMethod ){
        this.methods.push(method);
    }

    public DeleteMethod(method: IMethod){
        this.methods = this.methods.filter(e => e.id != method.id);
    }

    public AddAttribute(attribute: IAttribute){
        this.attributes.push(attribute);
    }

    public DeleteAttribute(attribute: IAttribute){
        this.attributes = this.attributes.filter(e => e.id != attribute.id);
        this.hight -= 11;
    }

    public ChangeAttributePosition(attribute: IAttribute, up: boolean){

        let old_index = this.attributes.indexOf(attribute);
        let new_index = up ? old_index - 1 : old_index + 1;

        if (new_index >= this.attributes.length) {
            var k = new_index - this.attributes.length + 1;
            while (k--) {
                 this.attributes.push(new Attribute('','',''));
            }
            }
         this.attributes.splice(new_index, 0, this.attributes.splice(old_index, 1)[0]);
    }
    
    public ChangeMethodPosition(method: IMethod, up: boolean){

        let old_index = this.methods.indexOf(method);
        let new_index = up ? old_index - 1 : old_index + 1;

        if (new_index >= this.methods.length) {
            var k = new_index - this.methods.length + 1;
            while (k--) {
                 this.methods.push(new Method('',''));
            }
            }
         this.methods.splice(new_index, 0, this.methods.splice(old_index, 1)[0]);
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
        let lengthName = (((this.name.length) * 14) + 120) * 0.9;
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
        this.setHight(result);
        return result;
    }

}