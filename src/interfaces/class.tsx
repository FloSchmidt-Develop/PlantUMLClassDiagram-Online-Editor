import IAttribute from './attribute';
import IMethod from './methode';
import IDeclaration from './declaration';


export default interface Class {
    attributes: IAttribute[],
    methods: IMethod[],
    declarations: IDeclaration[];
    name: string,
    package: string,
    type: string,
    alias: string

    setName(newName: string): void;

    setType(newName: string): void;

    AddMethods(method:IMethod ): void;

    AddAttribute(attribute: IAttribute): void;

    getWidth(): number;
}
