import IAttribute from '../../interfaces/attribute'


export default class Attribute implements IAttribute {
    public name: string;
    public dataType: string;
    public visibility: string;

    constructor(name: string, dataType: string, visibility: string){
        this.name = name;
        this.dataType = dataType;
        this.visibility = visibility;
    }
}