import ConnectionInputCreator from '../connectionInputCreator';
import ConnectionController from '../../../controller/modelController/connectionController';
import Connection from '../../../parserRep/connection';




export default class ConnectionEditingView{

    public static CreateConnectionEditingView(selectedConnection: Connection, sender : any, graph: any, view: HTMLDivElement): HTMLDivElement{

        let attributeHeader = document.createElement('h3');
        attributeHeader.innerText = 'Connection';

        let table = document.createElement("table");
        let controller = new ConnectionController(selectedConnection,sender.cells[0],graph);

        //type
        let connectionInputCreator = new ConnectionInputCreator(controller);
        let type_tr = connectionInputCreator.createTypeSeclectDiv(selectedConnection);
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