import { Visibility, Modifiers } from "../../../interfaces/class";

import PrivateMethode from '../../../images/PrivateMethode.png'
import ProtectedMethode from '../../../images/ProtectedMethode.png'
import PackageMethode from '../../../images/PackageMethode.png'
import PublicMethode from '../../../images/PublicMethode.png'
import Class from "../../model/class";

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
        method_div.style.display = 'flex';

        let visibility_icon = document.createElement("img");

        visibility_icon.src = method.visibility === Visibility.private
            ? PrivateMethode : method.visibility === Visibility.protected
            ? ProtectedMethode : method.visibility === Visibility.package
            ? PackageMethode : method.visibility === Visibility.public
            ? PublicMethode: PrivateMethode;

            visibility_icon.style.width = '7px';
            visibility_icon.style.height = '7px';
            visibility_icon.style.marginLeft = '0px';
            visibility_icon.style.marginRight= '2px';
            visibility_icon.style.marginTop = '2px';

            let name = document.createElement("div");
            let dataType = document.createElement("div");
            let attributeList = document.createElement("div");

            name.innerText = method.getName() + " ";
            dataType.innerText = method.dataType;
            attributeList.innerText = method.getAttributeListAsString() + ": ";
            method_div.appendChild(visibility_icon);
            method_div.appendChild(name);
            method_div.appendChild(attributeList);
            method_div.appendChild(dataType);

            name.style.textDecoration = method.modifiers === Modifiers.static ? 'underline' : 'none';
            name.style.fontStyle = method.modifiers === Modifiers.abstract ? 'italic' : 'none';



        method_container_div.appendChild(method_div);
  
  
          }
  
        tr.appendChild(method_container_div);
        return tr;
    }

}