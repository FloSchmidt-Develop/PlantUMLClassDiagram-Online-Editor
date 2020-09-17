import MyObject from '../../parserRep/myObject';



import VertexHeaderLabel from "./vertexHeaderLabel";
import VertexAttributeLabel from './vertexAttributeLabel'
import VertexMethodLabel from "./vertexMethodLabel";
import VertexDeclarationLabel from "./vertexDeclarationLabel";
import Class from '../../parserRep/class';


export default class VertexCellLabel{

    public static CreateVertexCellLabel(actualClass: Class | MyObject): HTMLTableElement
    {
        var table = document.createElement("table");
        
        table.style.fontFamily = 'Consolas'
        table.style.padding = "10px";
        table.style.border = '0px';
        table.style.margin = '0px';
  
  
        var body = document.createElement("tbody");

        //Header of Vertex
        body.appendChild(VertexHeaderLabel.GetVertexHeaderRow(actualClass));

        //Attribute and Methods for Classes != Object
        if (actualClass.type !== 'object') 
        {

        //Attributes
        body.appendChild(VertexAttributeLabel.CreateAttributeLabel(actualClass));

        //Methods
        body.appendChild(VertexMethodLabel.CreateVertexMethodLabel(actualClass));
        }

        //Object-----------------------------------------------------------------------------
        else
        {
        //Declarations
        body.appendChild(VertexDeclarationLabel.CreateVertexDeclarationLabel(actualClass));
        }

        table.appendChild(body);
        return table;
    }
}