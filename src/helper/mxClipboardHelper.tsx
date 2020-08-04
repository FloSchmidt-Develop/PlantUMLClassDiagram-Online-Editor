import {
    mxClipboard
  } from "mxgraph-js";
import Class from "../classes/parserRep/class";
import DiagramCreator from "./diagramCreator";
import Package from "../classes/parserRep/package";

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
          var delta = mxClipboard.insertCount * mxClipboard.STEPSIZE;
          var parent = graph.getDefaultParent();
          console.log(cells);
          

          graph.model.beginUpdate();
          try
          {
            for (var i = 0; i < cells.length; i++)
            {
              var tmp = (mxClipboard.parents != null && graph.model.contains(mxClipboard.parents[i])) ?
                  mxClipboard.parents[i] : parent;
              var tempObj = cells[i].value;
             
              //paste class
              if(tempObj instanceof Class){         
                console.log('Paste Class');
                   
                let newCls = (tempObj as Class).cloneModel();
                newCls.setName(newCls.getName() + 'Copy');
                DiagramCreator.diagram[DiagramCreator.activeIndex].addClass(newCls);
                cells[i].value = newCls;
                cells[i] = graph.importCells([cells[i]], delta, delta, tmp)[0];
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