import Class from "../../../interfaces/class";

import { mxUtils} from "mxgraph-js";

export default class VertexMethodLabel{

    public static CreateVertexMethodLabel(actualClass: Class): HTMLTableRowElement{
        var tr = document.createElement("tr");
        var method_container_div = document.createElement("div");

        method_container_div.style.textAlign = "left";
        method_container_div.style.fontSize = "10px";
        method_container_div.style.borderBottom = "1px solid black";
        method_container_div.style.minHeight = "5px";

        for (let index = 0; index < actualClass.methods.length; index++) {
        const method = actualClass.methods[index];

        var method_div = document.createElement("div");

        var content_string =
            method.visibility +
            " " +
            method.getName() +
            " " +
            method.getAttributeListAsString() +
            ": " +
            method.dataType;

        mxUtils.write(method_div, content_string);

        method_container_div.appendChild(method_div);
  
  
          }
  
        tr.appendChild(method_container_div);
        return tr;
    }

}