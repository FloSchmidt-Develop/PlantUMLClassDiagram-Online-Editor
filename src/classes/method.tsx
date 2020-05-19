import IMethode from '../interfaces/methode';
import IAttribute from '../interfaces/attribute';

export default class Method implements IMethode{
    name: string;
    dataType: string = '';
    attributeList: IAttribute[] = [];
    visibility: string;

    constructor(name :string, visibility : string ){
        this.name = name;
        this.visibility = visibility;
    }
}