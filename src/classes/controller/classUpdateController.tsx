import IClass from '../../interfaces/class';
import ElementUpdateController from './elementUpdateController';
import { mxGeometry} from "mxgraph-js";


export default class ClassUpdateController extends ElementUpdateController{

    public static updateClassValues(graph, mxCellToUpdate, classToUpdate: IClass){
        
        super.updateElement(graph,mxCellToUpdate,classToUpdate);

        let oldGeometry = graph.model.getGeometry(mxCellToUpdate);
        let newValues = new mxGeometry(
          oldGeometry.x, oldGeometry.y, classToUpdate.getWidth(), classToUpdate.getHeight());
        graph.model.setGeometry(mxCellToUpdate, newValues);


    }

}