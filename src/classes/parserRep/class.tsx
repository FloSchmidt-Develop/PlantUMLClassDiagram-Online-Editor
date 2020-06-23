import IClass from '../../interfaces/class'
import IAttribute from '../../interfaces/attribute'
import IMethod from '../../interfaces/methode'
import IDeclaration from '../../interfaces/declaration'


export default class Class implements IClass{
    public attributes: IAttribute[] = [];
    public methods: IMethod[] = [];
    public declarations: IDeclaration[] = [];
    public name: string;
    public package: string = '';
    public type: string;
    public alias: string = '';
    //public diagram: IAddOnlyDiagram;

    constructor(name: string, type: string){
        this.name = name;
        this.type = type;
        //this.diagram = diagram;
    }

    public setName(newName: string){
        this.name = newName;
    }

    public setType(newType: string){
        this.type = newType;
    }

    public AddMethods(method:IMethod ){
        this.methods.push(method);
    }

    public AddAttribute(attribute: IAttribute){
        this.attributes.push(attribute);
    }

    public getWidth(): number{
        let max = 75; // min width

        let lengthName = (this.name.length) * 12;
        if(lengthName > max)
            max = lengthName;

        let lengthType = (this.type.length  + 4) * 12;
        if(lengthType > max)
            max = lengthType;
        
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
        
        return max * 0.60;
    }

    public getHeight(): number {

        return 67 
        + (this.attributes.length * 11) 
        + (this.methods.length * 11) 
        + (this.declarations.length * 11) 
        - (this.attributes.length !== 0 ? 3 : 0) 
        - (this.methods.length !== 0 ? 3 : 0);
    }

}