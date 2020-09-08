import childChangeController from "./childChangeInteractions";
import ValueChangeController from "./valueChangeInteractions/cellValueChangeController";
import TerminalChangeController from "./terminalChangeInteractions";
import GeometryChangeController from "./geometryChangeInteraction.tsx";
import DiagramCreator from "../../../helper/diagramCreator";

import axios from "axios";
import ExportProvider from "../../../ExportProvider";

export default class ChangeInteraction{

    public static async ModelChange(sender,evt){
        
        var changes = evt.getProperty('edit').changes;
        
        for (var i = 0; i < changes.length; i++)
        {
            var change = changes[i];
            
            
            if (change.constructor.name === 'mxChildChange')
            {
                
                childChangeController.ChildChange(change);   
            }

            else if(change.constructor.name === 'mxValueChange'){
                
                ValueChangeController.valueChanged( change.value, change.previous);
            }
            
            else if(change.constructor.name === 'mxTerminalChange'){

                TerminalChangeController.TerminalChange(change);
            }

            else if(change.constructor.name === 'mxGeometryChange'){

                GeometryChangeController.ChangeGeometry(change);
            }
        }

        var jsonObj = JSON.stringify(DiagramCreator.diagram[DiagramCreator.activeIndex],replacer);
        var obj = JSON.parse(jsonObj);

        const pumlContent = await axios.post("/export",obj);
        const linkContainer = await axios.post("/png",obj);
        
        
        ExportProvider.setChange(linkContainer.data, pumlContent.data)
    }
}

function replacer(key,value)
{
    if (key=="vertex") return undefined;
    else return value;
}