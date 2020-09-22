import { Arrows, Lines } from "../../../interfaces/connector";
import Connector from "../../model/connector";

export default class EdgeStyleCreator{

    public static getStyle(connector: Connector): string{
        return this.getLineStyle(connector) +
        this.getStartArrowStyle(connector) +
        this.getEndArrowStyle(connector) + 
        "sourcePerimeterSpacing=0;shape=link;fontSize=18;fontColor=#000000;fillColor=#ffffff;strokeOpacity=100;strokeWidth=2;strokeColor=#000000;"
    }

    private static getLineStyle(connector: Connector): string {
        if (connector.lineStyle === Lines.dotted) {
          return "dashed=1;";
        }
        return "dashed=0;";
    }
    
    private static getStartArrowStyle(connector: Connector): string {
        if (connector.startArrowSymbol === Arrows.diamond) {
          return "startArrow=diamond;startFill=0;";
        } else if (connector.startArrowSymbol === Arrows.big) {
          return "startArrow=block;startFill=0;startSize=20;";
        } else if (connector.startArrowSymbol === Arrows.diamondFilled) {
          return "startArrow=diamond;startFill=1;";
        } else if (connector.startArrowSymbol === Arrows.normal) {
          return "startArrow=classic;startFill=1;";
        }
        return "startArrow=dash;";
    }
    
    private static getEndArrowStyle(connector: Connector): string {
        if (connector.endArrowSymbol === Arrows.diamond) {
          return "endArrow=diamond;endFill=0;";
        } else if (connector.endArrowSymbol === Arrows.big) {
          return "endArrow=block;endFill=0;endSize=20;";
        } else if (connector.endArrowSymbol === Arrows.diamondFilled) {
          return "endArrow=diamond;endFill=1;";
        } else if (connector.endArrowSymbol === Arrows.normal) {
          return "endArrow=classic;endFill=1;";
        }
        return "endArrow=dash;endFill=0;";
    }
}