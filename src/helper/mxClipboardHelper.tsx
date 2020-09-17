import {
    mxClipboard
  } from "mxgraph-js";
import Class from "../classes/parserRep/class";
import DiagramCreator from "./diagramCreator";
import Package from "../classes/parserRep/package";
import Connection from "../classes/parserRep/connection";
import EdgeStyleCreator from "../classes/view/cellLables/edgeStyle";

export default class MxClipboardHelper{

    public static Copy(graph,cells): any{
        cells = cells || graph.getSelectionCells();
        var result = graph.getExportableCells(cells);

        mxClipboard.parents = new Object();

        for (var i = 0; i < result.length; i++)
        {
          mxClipboard.parents[i] = graph.model.getParent(cells[i]);
        }

        mxClipboard.insertCount = 1;
        mxClipboard.setCells(graph.cloneCells(result));
        
        return result;
    }

    public static Paste(graph){
        if (!mxClipboard.isEmpty())
        {
          
          var cells = graph.getImportableCells(mxClipboard.getCells());
          var delta = mxClipboard.insertCount * (mxClipboard.STEPSIZE + 50);
          var parent = graph.getDefaultParent();
          //console.log(cells);
          

          graph.model.beginUpdate();
          try
          {
            let addedClasses = [];
            for (var i = 0; i < cells.length; i++)
            {
              var tmp = (mxClipboard.parents != null && graph.model.contains(mxClipboard.parents[i])) ?
                  mxClipboard.parents[i] : parent;
              var tempObj = cells[i].value;
             
              //paste class
              if(tempObj instanceof Class){         

                let newCls = (tempObj as Class).cloneModel();
                (newCls as Class).observers = [];

                
                
                newCls.setName(newCls.getName() + 'Copy');
                DiagramCreator.diagram[DiagramCreator.activeIndex].addClass(newCls);
                cells[i].value = newCls;
                addedClasses[newCls.getName()] = graph.importCells([cells[i]], delta, delta, tmp)[0];
              }
              if(tempObj instanceof Connection){
                console.log(tempObj);
                
              }
              //import package
              else if(tempObj instanceof Package){
                const newPackage = (tempObj as Package).cloneModel();
                newPackage.classReferences = [];
                newPackage.packageReferences = [];
                newPackage.setName(tempObj.getName() +'Copy');

                cells[i].children = null;
                cells[i].value = newPackage;

                cells[i] = graph.importCells([cells[i]], delta, delta, tmp)[0];
              }
            }
            //add Copied Connection to Copied Classes
            for(var j = 0; j < cells.length; j++){
              console.log(cells);
              
              var tmp = (mxClipboard.parents != null && graph.model.contains(mxClipboard.parents[j])) ?
                  mxClipboard.parents[j] : parent;
              var tempObj = cells[j].value;

              if(tempObj instanceof Connection){
                let newConn = (tempObj as Connection).cloneModel(tempObj.sourceElement + 'Copy',tempObj.destinationElement + 'Copy');
                DiagramCreator.diagram[DiagramCreator.activeIndex].addConnection(newConn);
                cells[j].children = null;

                console.log(cells[j]);
                

                let addedCell = graph.insertEdge(
                  graph.getDefaultParent(),
                  null,
                  newConn,
                  addedClasses[newConn.sourceElement],
                  addedClasses[newConn.destinationElement],
                  EdgeStyleCreator.getStyle(newConn.connector)
                );

                let left = graph.insertVertex(addedCell, null, newConn.multiplicity_left, -0.9, 0, 0, 0,
                'fontSize=14;fontColor=#000000;fillColor=#ffffff;strokeOpacity=0;fillOpacity=0;strokeWidth=0;', true);        
                graph.updateCellSize(left);
                newConn.multiplicity_left.vertex = left;
                left.isConnectable = () => false;

                let right = graph.insertVertex(addedCell, null, newConn.multiplicity_right, 0.9, 0, 0, 0,
                'fontSize=14;fontColor=#000000;fillColor=#ffffff;strokeOpacity=0;fillOpacity=0;strokeWidth=0;', true);        
                graph.updateCellSize(right);
                newConn.multiplicity_left.vertex = right;
                right.isConnectable = () => false;
                
                
              }
            }
            
          }
          finally
          {
            graph.model.endUpdate();
          }

          // Increments the counter and selects the inserted cells
          mxClipboard.insertCount++;
          graph.setSelectionCells(cells);
        }
    }
}