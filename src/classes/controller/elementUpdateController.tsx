export default class ElementUpdateController{


    public static updateElement(graph: any, mxCellToUpdate: any, updateSource: any, input? : any ){

        if(graph == null && mxCellToUpdate == null && updateSource == null )
            throw new Error('Updating not possible some element is null or undefined');


        graph.model.setValue(mxCellToUpdate, updateSource);
        let tempSelectedCell = mxCellToUpdate;
        graph.getSelectionModel().clear();
        graph.getSelectionModel().addCell(tempSelectedCell);


    }

}