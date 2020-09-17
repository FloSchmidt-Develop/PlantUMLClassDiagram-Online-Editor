import { mxUtils} from "mxgraph-js";
import Class from "../../parserRep/class";

export default class VertexDeclarationLabel{

    public static CreateVertexDeclarationLabel(actualClass: Class): HTMLTableRowElement{
        var tr = document.createElement("tr");
        var declaration_divContainer = document.createElement("div");

        declaration_divContainer.style.textAlign = "left";
        declaration_divContainer.style.fontSize = "10px";
        declaration_divContainer.style.borderBottom = "1px solid black";
        declaration_divContainer.style.minHeight = "5px";

        for (let index = 0; index < actualClass.declarations.length; index++) {
            const declaration = actualClass.declarations[index];

            var declaration_div = document.createElement("div");

            var content_string =
                declaration.getName() +
                "= " +
                declaration.declaration_value;

            mxUtils.write(declaration_div, content_string);

            declaration_divContainer.appendChild(declaration_div);
            }

            tr.appendChild(declaration_divContainer);
            return tr;

    }
}