
import ElementUpdateController from './elementUpdateController';
import { mxGeometry} from "mxgraph-js";
import Class from '../model/class';


export default class ClassUpdateController extends ElementUpdateController{

    public static updateClassValues(graph, mxCellToUpdate, classToUpdate: Class){
        
        super.updateElement(graph,mxCellToUpdate,classToUpdate);

        let oldGeometry = graph.model.getGeometry(mxCellToUpdate);
        let newValues = new mxGeometry(
          oldGeometry.x, oldGeometry.y, classToUpdate.getWidth(), classToUpdate.getHeight());
        graph.model.setGeometry(mxCellToUpdate, newValues);


    }

}