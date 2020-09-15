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
    dataType: string;

    getWidth(): number;
    getHeight(): number;
    setWidth(width: number);
    setHight(hight: number);

    setType(type: string);
    cloneModel(): Class;
}

export enum Modifiers{
    static,
    abstract,
    none,
}

export enum Visibility{
    private,
    protected,
    package,
    public,
    undefined,
}

