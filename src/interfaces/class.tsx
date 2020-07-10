import IAttribute from './attribute';
import IMethod from './methode';
import IDeclaration from './declaration';
import ITyped from './typed';
import IName from './named';
import ID from './id';

export default interface Class extends ITyped, IName, ID{
    attributes: IAttribute[],
    methods: IMethod[],
    declarations: IDeclaration[];
    package: string,
    type: string,
    alias: string,
    x: number;
    y: number;

    AddMethods(method:IMethod ): void;
    DeleteMethod(method: IMethod): void;

    DeleteAttribute(attribute: IAttribute): void;
    AddAttribute(attribute: IAttribute): void;

    ChangeAttributePosition(attribute: IAttribute, up: boolean): void;
    ChangeMethodPosition(method: IMethod, up: boolean): void;

    getWidth(): number;
    getHeight(): number;
    setWidth(width: number);
    setHight(hight: number);

    setType(type: string);
    cloneModel(): Class;
}
