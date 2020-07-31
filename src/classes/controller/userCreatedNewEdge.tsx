import Class from "../parserRep/class";
import Connection from "../parserRep/connection";
import DiagramCreator from "../../helper/diagramCreator";
import Point from "../parserRep/point";

export default class UserCreatedNewEdge{
    public static CreateNewEdgeFromCell(cell: any, graph: any): any{

        let connection: Connection;
        
        if(cell.target.value instanceof Class && cell.source.value instanceof Class){
            connection = new Connection('<--','','',cell.target.value.getName(),cell.source.value.getName(),'');
            console.log('Connection with Class');
            
            
            if(cell.target.value instanceof Class)
                (cell.target.value as Class).registerObserver(connection);
            if(cell.source.value instanceof Class)
                (cell.source.value as Class).registerObserver(connection);

        }
        else if(cell.target.value instanceof Class && cell.source.value instanceof Connection){
            let sourceConnectionName =
             '(' + (cell.source.value as Connection).destinationElement + ',' + (cell.source.value as Connection).sourceElement + ')';

            connection = new Connection('<--','','',cell.target.value.getName(),sourceConnectionName,'');    

            if(cell.target.value instanceof Class)
                (cell.target.value as Class).registerObserver(connection);

            if(cell.source.value instanceof Connection)
                (cell.source.value as Connection).registerObserver(connection);

        }
        else if((cell.target.value instanceof Connection) && (cell.source.value instanceof Class)){
            let targetConnectionName = 
            '(' 
            + (cell.target.value as Connection).destinationElement 
            + ',' + (cell.target.value as Connection).sourceElement 
            + ')';
            console.log(targetConnectionName);
            
            connection = new Connection('<-','','',targetConnectionName,cell.source.value.getName(),'');
            connection.destinationElement = targetConnectionName;

            console.log(connection);
            


            if(cell.target.value instanceof Connection)
                (cell.target.value as Connection).registerObserver(connection);

            if(cell.source.value instanceof Class)
                (cell.source.value as Class).registerObserver(connection);

        }
        else{
            connection = new Connection('','','','','','');
        }
        
        graph.getModel().beginUpdate();
    
        graph.model.setValue(cell, connection);
        connection.points = cell.geometry.points?.reduce((acc,curr) => acc.push(new Point(curr.x,curr.y)),[]);
        
        graph.model.setStyle(cell, "sourcePerimeterSpacing=0;shape=link;edgeStyle=orthogonalEdgeStyle;");

        var e21 = graph.insertVertex(cell, connection.id + 'L', connection.multiplicity_left, -0.9, 0, 0, 0,
        'fontSize=14;fontColor=#000000;fillColor=#ffffff;strokeOpacity=0;fillOpacity=0;strokeWidth=0;', true);
        connection.multiplicity_left.vertex = e21;
        e21.isConnectable = () => false;

        var e12 = graph.insertVertex(cell, null, connection.multiplicity_right, 0.9, 0, 0, 0,
        'fontSize=14;fontColor=#000000;fillColor=#ffffff;strokeOpacity=0;fillOpacity=0;strokeWidth=0;', true);
        connection.multiplicity_right.vertex = e12;
        e12.isConnectable = false;

        graph.getModel().endUpdate();

        return connection.stereoType;

    }
}