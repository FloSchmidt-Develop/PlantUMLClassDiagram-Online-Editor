import IClass from '../../interfaces/class'
import IAttribute from '../../interfaces/attribute'
import IMethod from '../../interfaces/methode'
import IDeclaration from '../../interfaces/declaration'
import ID from './id';


export default class Class extends ID implements IClass {
    public attributes: IAttribute[] = [];
    public methods: IMethod[] = [];
    public declarations: IDeclaration[] = [];
    private name: string;
    public package: string = '';
    public type: string;
    public alias: string = '';
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

    public getWidth(): number{
        let max = 250; // min width

        //charakters in name + (image_width + margin) * 2
        let lengthName = (((this.name.length) * 14) + 120) * 0.9;
        if(lengthName > max){
            console.log('Name:');        
            max = lengthName;
            console.log(max);
        }
        
        for (let index = 0; index < this.attributes.length; index++) {
            let attribute = this.attributes[index];
            if(attribute.getWidth() > max){
                console.log('Attribute:');
                max = attribute.getWidth();
                console.log(max);
            }
        }

        for (let index = 0; index < this.methods.length; index++) {
            let method = this.methods[index];
            if(method.getWidth() > max){
                console.log('Method: ');
                max = method.getWidth();
                console.log(max);
            }
            
        }

        for (let index = 0; index < this.declarations.length; index++) {
            let declaration = this.declarations[index];
            if(declaration.getWidth() > max){
                console.log('Declaration');
                max = declaration.getWidth();
                console.log(max);
                
            }
        }

        return max;
    }

    public getHeight(): number {

        return 100
        + (this.attributes.length * 11) 
        + (this.methods.length * 11) 
        + (this.declarations.length * 11) 
        - (this.attributes.length !== 0 ? 3 : 0) 
        - (this.methods.length !== 0 ? 3 : 0);
    }

}