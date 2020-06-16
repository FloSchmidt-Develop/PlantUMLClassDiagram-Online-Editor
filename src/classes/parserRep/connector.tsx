import IConnector, {Arrows, Lines }from '../../interfaces/connector';


export default class Connector implements IConnector{
    startArrowSymbol: Arrows = Arrows.none;
    endArrowSymbol: Arrows = Arrows.none;
    lineStyle: Lines = Lines.normal;

    constructor(connector: string){

        this.setStartConnector(connector);
        this.setEndConnector(connector);
        this.setLineStyle(connector);

    }

    public setStartConnector(connector: string){
        if(connector.endsWith('o')){
            this.startArrowSymbol = Arrows.diamond;
        }
        else if(connector.endsWith('|>')){
            this.startArrowSymbol = Arrows.big;
        }
        else if(connector.endsWith('*')){
            this.startArrowSymbol = Arrows.diamondFilled;
        }
        else if(connector.endsWith('>')){
            this.startArrowSymbol = Arrows.normal;
        }
        else{
            this.startArrowSymbol = Arrows.none;
        }
    }

    public setStartConnector_direct(startArrow: Arrows){
        this.startArrowSymbol = startArrow;
    }

    public setEndConnector(connector: string){
        if(connector.startsWith('o')){
            this.endArrowSymbol = Arrows.diamond;
        }
        else if(connector.startsWith('<|')){
            this.endArrowSymbol = Arrows.big;
        }
        else if(connector.startsWith('*')){
            this.endArrowSymbol = Arrows.diamondFilled;
        }
        else if(connector.startsWith('<')){
            this.endArrowSymbol = Arrows.normal;
        }
        else{
            this.endArrowSymbol = Arrows.none;
        }
    }

    public setEndConnector_direct(endArrow: Arrows){
        this.endArrowSymbol = endArrow;
    }

    public setLineStyle(connector: string){
        if(connector.includes('.')){
            this.lineStyle = Lines.dotted;
        }
        else{
            this.lineStyle = Lines.normal;
        }
    }

    public setLineStyle_direct(line: Lines){
        this.lineStyle = line;
    }

    public resetConnections(connector: string){
        this.setStartConnector(connector);
        this.setEndConnector(connector);
        this.setLineStyle(connector);
    }



}