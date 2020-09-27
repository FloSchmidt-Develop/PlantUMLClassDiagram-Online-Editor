import MyObject from "../../model/myObject";

import ClassIcon from '../../../images/Class.png'
import AbstractClassIcon from '../../../images/AbstractClass.png'
import InterfaceIcon from '../../../images/Interface.png'
import ObjectIcon from '../../../images/Object.png'
import Class from "../../model/class";

export default class VertexHeaderLabel{

    public static GetVertexHeaderRow(actualClass: Class | MyObject): HTMLTableRowElement{
        var tr1 = document.createElement("tr");
          var container_div = document.createElement("div");
  
          container_div.style.textAlign = "center";
          container_div.style.fontSize = "12px";
          container_div.style.borderBottom = "1px solid black";
  
          var header_div = document.createElement("div");
          var dummy_div = document.createElement("div");
          var header_icon = document.createElement("img");
          var header_text = document.createElement("p");
  
          header_icon.src = actualClass.type === 'class' 
            ? ClassIcon : (actualClass.type === 'abstractclass' || actualClass.type === 'abstract')
            ? AbstractClassIcon : actualClass.type === 'interface' 
            ? InterfaceIcon : actualClass.type === 'object'
            ? ObjectIcon : ClassIcon;
          header_icon.style.width = '40px';
          header_icon.style.height = '40px';
          header_icon.style.marginLeft = '20px';
          header_icon.style.marginRight= '20px';
          header_icon.style.marginBottom = '20px';

  
          dummy_div.style.width = '40px';
          dummy_div.style.height = '40px';
          dummy_div.style.marginRight = '20px';
          dummy_div.style.marginLeft = '20px';
  
          header_text.innerText = actualClass.getName() + (actualClass.type === 'object' ? ((actualClass as MyObject).dataType !== '' ? (':' + (actualClass as MyObject).dataType) : '') : '');
          header_text.style.marginTop = '13px';
          header_text.style.fontSize = '14px';
          header_text.style.marginBottom = '13px';
  
          header_div.style.display = 'flex';
          header_div.style.justifyContent = 'space-between';
  
          header_div.appendChild(header_icon);
          header_div.appendChild(header_text);
  
  
          header_div.appendChild(dummy_div);
          container_div.appendChild(header_div);
          tr1.appendChild(container_div);
          return tr1;
    }

}