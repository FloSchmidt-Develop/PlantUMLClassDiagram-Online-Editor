import Class from "../../../parserRep/class";
import Connection from "../../../parserRep/connection";
import Point from "../../../parserRep/point";
import Package from "../../../parserRep/package";
import Note from "../../../parserRep/note";


export default class GeometryChangeController{

    public static ChangeGeometry(change: any){

        let changedCell = change.cell;
        let geometry = change.geometry;

        if(changedCell != null && geometry != null && changedCell.value instanceof Class){
          let changedClass = changedCell.value as Class;
          changedClass.x = geometry.x;
          changedClass.y = geometry.y;
          changedClass.setHight(geometry.hight);
          changedClass.setWidth(geometry.width);
        }
        else if(changedCell != null && geometry != null && changedCell.value instanceof Connection){
          let changedConnection = changedCell.value as Connection;
          let pts: Point[] = [];
          for (let index = 0; index < geometry?.points?.length; index++) {
            const pt = geometry.points[index];
            pts.push(new Point(pt.x,pt.y));
            
          }
          changedConnection.points = pts;
        }
        else if(changedCell != null && geometry != null && changedCell.value instanceof Package){
          let changedPackage = changedCell.value as Package;
          changedPackage.x = geometry.x;
          changedPackage.y = geometry.y;
          
          changedPackage.setHight(geometry.height);
          changedPackage.setWidth(geometry.width);
        }
        if(changedCell != null && geometry != null && changedCell.value instanceof Note){
          let changedNote = changedCell.value as Note;
          changedNote.x = geometry.x;
          changedNote.y = geometry.y;
          changedNote.setHight(geometry.hight);
          changedNote.setWidth(geometry.width);
        }
        
    }
}