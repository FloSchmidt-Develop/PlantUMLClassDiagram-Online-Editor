import IDeclaration from '../../interfaces/declaration'


export default class Declaration implements IDeclaration{
    name: string;
    declaration_value: string;

    constructor(name: string, value: string){
        this.name = name;
        this.declaration_value = value;
    }
}