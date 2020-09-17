import {Arrows, Lines, LayoutProperty }from '../../interfaces/connector';
import ID from './id';
import Clonable from '../../interfaces/cloneable';


export default class Connector extends ID implements Clonable{
    startArrowSymbol: Arrows = Arrows.none;
    endArrowSymbol: Arrows = Arrows.none;
    lineStyle: Lines = Lines.normal;
    layoutProperty: LayoutProperty;

    constructor(connector: string){
        super();
        this.setStartConnector(connector);
        this.setEndConnector(connector);
        this.setLineStyle(connector);
        this.setLayoutProperty(connector);
        this.layoutProperty = this.setLayoutProperty(connector);

    }

    private setLayoutProperty(connector: string) : LayoutProperty{
        if(connector.includes('left') || connector.includes('l')){
            return LayoutProperty.left;
        }
        else if(connector.includes('right') || connector.includes('r')){
            return LayoutProperty.right;
        }
        else if(connector.includes('up') || connector.includes('u')){
            return LayoutProperty.up;
        }
        else if(connector.includes('down') || connector.includes('d')){
            return LayoutProperty.down;
        }
        return LayoutProperty.none;

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

    public getStartConnector(): string{
        if(this.startArrowSymbol === Arrows.diamond){
            return 'o';
        }
        else if(this.startArrowSymbol === Arrows.big){
            return '|>';
        }
        else if(this.startArrowSymbol === Arrows.diamondFilled){
            return '*';
        }
        else if(this.startArrowSymbol === Arrows.normal){
            return '>';
        }
        else{
            return ''
        }
    }

    public getLineStyle(): string{
        if(this.lineStyle = Lines.dotted){
            return '..';
        }
        else{
            return '--';
        }
    }

    public getEndConnector(): string{
        if(this.endArrowSymbol === Arrows.diamond){
            return 'o';
        }
        else if(this.endArrowSymbol === Arrows.big){
            return '<|';
        }
        else if(this.endArrowSymbol === Arrows.diamondFilled){
            return '*';
        }
        else if(this.endArrowSymbol === Arrows.normal){
            return '<';
        }
        else{
            return ''
        }
    }

    public cloneModel(): Connector{
        let newConnector = new Connector('');
        newConnector.startArrowSymbol = this.startArrowSymbol;
        newConnector.endArrowSymbol = this.endArrowSymbol;
        newConnector.lineStyle = this.lineStyle;
        newConnector.layoutProperty = this.layoutProperty;
        return newConnector;

    }



}