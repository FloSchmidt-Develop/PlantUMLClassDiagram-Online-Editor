import Class from "./class";

export default class MyObject extends Class{

    constructor(name: string, type: string) {
        
        super(name.split(':')[0],type);
        if(name.split(':')[1] != null){
            this.dataType = name.split(':')[1];
        }
        else
            this.dataType = '';
        
    }

}