import IClass from '../../../../interfaces/class';
import Attribute from "../../../parserRep/attribute";
import Method from "../../../parserRep/method";

import TypeSelectCreator from '../typeSelectCreator';
import NameSelectCreator from '../nameInputCreator';
import AttributeInputCreator from '../attributeInputCreator';
import MethodInputCreator from '../methodInputCreator';
import ClassUpdateController from '../../../controller/classUpdateController';
import IConnection from '../../../../interfaces/connection';
import ConnectionInputCreator from '../connectionInputCreator';




export default class ConnectionEditingView{

    public static CreateConnectionEditingView(selectedConnection: IConnection, sender : any, graph: any, view: HTMLDivElement): HTMLDivElement{

        let attributeHeader = document.createElement('h3');
        attributeHeader.innerText = 'Connection';

        let table = document.createElement("table");

        //type
        let connectionInputCreator = new ConnectionInputCreator(graph);
        let type_tr = connectionInputCreator.createTypeSeclectDiv(selectedConnection, sender);
        table.appendChild(type_tr[0]);
        table.appendChild(type_tr[1]);
        table.appendChild(type_tr[2]);
        table.appendChild(type_tr[3]);
        table.appendChild(type_tr[4]);
        table.appendChild(type_tr[5]);



        view.appendChild(attributeHeader);
        view.appendChild(table);
        

        return view;

    } 
}