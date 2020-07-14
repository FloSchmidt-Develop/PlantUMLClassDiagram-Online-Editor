import Class from "./class";

export default class Object extends Class{
    dataType: string = '';
    /**
     *
     */
    constructor(name: string, type: string) {
        
        super(name.split(':')[0],type);
        if(name.split(':')[1] != null){
            console.log(name.split(':')[1]);
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
}