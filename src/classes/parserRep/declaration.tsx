import IDeclaration from '../../interfaces/declaration'
import ID from './id';


export default class Declaration extends ID implements IDeclaration{
    name: string;
    declaration_value: string;

    constructor(name: string, value: string){
        super();
        this.name = name;
        this.declaration_value = value;
    }

    public setName(newName : string){
        this.name = newName;
    }
    
    public setDeclarationValue(newDeclarationValue: string){
        this.declaration_value = newDeclarationValue;
    }

    public getWidth(): number{
        return (this.name.length + this.declaration_value.length) * 10;
    }
}