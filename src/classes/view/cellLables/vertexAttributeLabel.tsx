import { Visibility, Modifiers } from "../../../interfaces/class";

import PrivateAttribute from '../../../images/PrivateAttribute.png'
import ProtectedAttribute from '../../../images/ProtectedAttribute.png'
import PackageAttribute from '../../../images/PackageAttribute.png'
import PublicAttribute from '../../../images/PublicAttribute.png'
import Class from "../../parserRep/class";


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

        let visibility_icon = document.createElement("img");

        visibility_icon.src = attribute.visibility === Visibility.private
            ? PrivateAttribute : attribute.visibility === Visibility.protected
            ? ProtectedAttribute : attribute.visibility === Visibility.package
            ? PackageAttribute : attribute.visibility === Visibility.public
            ? PublicAttribute : PrivateAttribute;

            visibility_icon.style.width = '7px';
            visibility_icon.style.height = '7px';
            visibility_icon.style.marginLeft = '0px';
            visibility_icon.style.marginRight= '2px';
            visibility_icon.style.marginTop = '2px';

        let name = document.createElement("div");
        let dataType = document.createElement("div");


        //attribute_div.appendChild(icon);
        name.innerText = attribute.getName() + ": ";
        dataType.innerText = attribute.dataType;
        attribute_div.appendChild(visibility_icon);
        attribute_div.appendChild(name);
        attribute_div.appendChild(dataType);

        attribute_div.style.textDecoration = attribute.modifiers === Modifiers.static ? 'underline' : 'none';
        attribute_div.style.fontStyle = attribute.modifiers === Modifiers.abstract ? 'italic' : 'none';
        

        //attribute_container_div.appendChild(icon);
        attribute_container_div.appendChild(attribute_div);
        }

        tr.appendChild(attribute_container_div);
        return tr
        
    }
}