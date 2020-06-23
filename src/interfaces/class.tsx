import IAttribute from './attribute';
import IMethod from './methode';
import IDeclaration from './declaration';
import ITyped from './typed';
import IName from './named';

export default interface Class extends ITyped, IName{
    attributes: IAttribute[],
    methods: IMethod[],
    declarations: IDeclaration[];
    package: string,
    type: string,
    alias: string

    AddMethods(method:IMethod ): void;

    AddAttribute(attribute: IAttribute): void;

    getWidth(): number;
    getHeight(): number;

    setType(type: string);
}
