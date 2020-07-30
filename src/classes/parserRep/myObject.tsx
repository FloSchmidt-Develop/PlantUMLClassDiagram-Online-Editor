import Class from "./class";

export default class MyObject extends Class{
    public dataType: string = '';
    /**
     *
     */
    constructor(name: string, type: string) {
        
        super(name.split(':')[0],type);
        if(name.split(':')[1] != null){
            this.dataType = name.split(':')[1];
        }
        else
            this.dataType = '';
        
    }

    public getWidth(): number {
        //charakters in name + (image_width + margin) * 2
        let width = super.getWidth();
        let lengthName = (((this.getName.name.length + this.dataType.length + 1) * 14) + 120) * 0.9;
        if(lengthName > width){   
            width = lengthName;
        }
        return width;

    }

    public cloneModel(): MyObject{
        let newObject = super.cloneModel() as MyObject;
        newObject.dataType = this.dataType;
        console.log(newObject);
        
        return newObject;
    }
}