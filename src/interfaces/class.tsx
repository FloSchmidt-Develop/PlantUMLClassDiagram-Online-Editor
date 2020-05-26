import IAttribute from './attribute';
import IMethode from './methode';
import IDeclaration from './declaration';


export default interface Class {
    attributes: IAttribute[],
    methodes: IMethode[],
    declarations: IDeclaration[];
    name: string,
    package: string,
    type: string,
    alias: string
}
