import Class from "../../../interfaces/class";

import { mxUtils} from "mxgraph-js";

export default class VertexAttributeLabel{

    public static CreateAttributeLabel(actualClass: Class): HTMLTableRowElement {
        var tr = document.createElement("tr");
        var attribute_container_div = document.createElement("div");

        attribute_container_div.style.textAlign = "left";
        attribute_container_div.style.fontSize = "10px";
        attribute_container_div.style.borderBottom = "1px solid black";
        attribute_container_div.style.minHeight = "5px";

        for (let index = 0; index < actualClass.attributes.length; index++) {
        const attribute = actualClass.attributes[index];

        var attribute_div = document.createElement("div");
        attribute_div.style.display = 'flex';

        var content_string =
            attribute.visibility +
            " " +
            attribute.getName() +
            ": " +
            attribute.dataType;

        //attribute_div.appendChild(icon);
        mxUtils.write(attribute_div, content_string);
        

        //attribute_container_div.appendChild(icon);
        attribute_container_div.appendChild(attribute_div);
        }

        tr.appendChild(attribute_container_div);
        return tr
        
    }
}