import ID from './id';
import Clonable from '../../interfaces/cloneable';


export default class Declaration extends ID implements Clonable{
    private name: string;
    declaration_value: string;

    constructor(name: string, value: string){
        super();
        this.name = name ? name : '';
        this.declaration_value = value ? value : '';
    }

    public setName(newName : string){
        this.name = newName;
    }

    public getName(): string{
        return this.name;
    }
    
    public setDeclarationValue(newDeclarationValue: string){
        this.declaration_value = newDeclarationValue;
    }

    public getWidth(): number{
        return (this.name.length + this.declaration_value.length) * 10;
    }

    public cloneModel(): Declaration{
        let newDeclaration = new Declaration(this.name,this.declaration_value);
        newDeclaration.id = this.id;
        return newDeclaration;
    }
}