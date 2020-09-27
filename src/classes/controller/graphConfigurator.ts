import {
    mxGraph,
    mxClient,
    mxUtils,
    mxEvent,
    mxKeyHandler,
    mxClipboard,
    mxRubberband,
    mxUndoManager,
    mxConstants,
    mxRectangle,
    mxGraphHandler,
    mxEdgeHandler,
    mxPoint
  } from "mxgraph-js";

import DiagramCreator from "../../helper/diagramCreator";
import Class from "../model/class";
import Multiplicity from "../model/multiplicity";
import Note from "../model/note";
import Connection from "../model/connection";
import Package from "../model/package";
import CellLabel from "../view/cellLables/cellLabel";
import UserCreatedNewEdge from "./userCreatedNewEdge";
import ChangeInteraction from "./mxGraphInteraction";
import MxClipboardHelper from "../../helper/mxClipboardHelper";


export default class GraphConfiguration{
    
    public static configureGraph(graph: any){
        if(graph == null)
        return;
        const undoManager = new mxUndoManager();
        var vertexStyle  = graph.getStylesheet().getDefaultVertexStyle();
        vertexStyle[mxConstants.STYLE_OVERFLOW] = 'width';
    
        var style = graph.getStylesheet().getDefaultEdgeStyle();
        style[mxConstants.STYLE_ROUNDED] = true;
        style[mxConstants.STYLE_EDGE] = 'orthogonalEdgeStyle';
        graph.alternateEdgeStyle = 'elbow=vertical';



        
        mxGraphHandler.prototype.guidesEnabled = true;
        mxEdgeHandler.prototype.snapToTerminals = true;
        mxGraphHandler.prototype.cloneEnabled = false;

        graph.setConnectableEdges(true);
        graph.setAllowDanglingEdges(false);
        graph.setConnectable(true);
        graph.setHtmlLabels(true);
        graph.setCellsResizable(true);
        //graph.setResizeContainer(false);
        graph.setDropEnabled(true);
        graph.setEscapeEnabled(true);
        graph.setExtendParentsOnMove(true);
        graph.setExtendParentsOnAdd(true);
        graph.isCellEditable = () => false;
        graph.allowNegativeCoordinates = false;
        graph.cloneInvalidEdges = false;
        graph.allowLoops = true;
        graph.zoomTo( DiagramCreator.diagram[DiagramCreator.activeIndex].scale); 

        graph.isValidDropTarget = (cell,cells,evt) => {
        if(cell.value instanceof Class || cell.value instanceof Multiplicity || cell.value instanceof Note || cell.value instanceof Connection){
            return false;
        }
        return true;
        }

        graph.isValidTarget  = (cell) => {
        if(cell.value instanceof Package || cell.value instanceof Multiplicity)
            return false;
        return true;
        }

        graph.isValidSource = (cell) => {

        if(cell.value instanceof Connection 
            || cell.value instanceof Package
            || cell.value instanceof Multiplicity)
            return false;
        return true;
        }

        graph.isValidConnection = (source,target) => {  
        if(source.value instanceof Connection && target.value instanceof Connection || target.value instanceof Package || source.value instanceof Package)
            return false;
        else if(target.value instanceof Connection && (target.value as Connection).destinationElement.includes('('))
            return false;
        return true;
        }

        //Copy/Paste
        mxClipboard.copy = function(graph, cells)
        {
          MxClipboardHelper.Copy(graph,cells);
        };
  
        mxClipboard.paste = function(graph)
        {
          MxClipboardHelper.Paste(graph);
        };
  
        //Delete/Add Classes Packages Connections On Add/Remove/Undo/Redo/Copy
        graph.getModel().addListener(mxEvent.CHANGE, function(sender, evt)
        {
          ChangeInteraction.ModelChange(sender,evt);
        });

        graph.getLabel = function (cell) {
  
            //Cell with known value
            if(cell.value instanceof Class 
            || cell.value instanceof Connection 
            || cell.value instanceof Package 
            || cell.value instanceof Multiplicity
            || cell.value instanceof Note)
            {        
              return CellLabel.CreateCellLabel(cell);
            }
      
            //Cell with not known value this is a Edge created by the User
            else
            {  
              if(cell.edge && cell.target != null && cell.source != null)
              {
                
                 return UserCreatedNewEdge.CreateNewEdgeFromCell(cell,graph);
              }
              else{
                return cell.value;   
              }
            }
          }

          var keyHandler = new mxKeyHandler(graph);
          keyHandler.bindKey(46, function(evt)
          {
            graph.removeCells();
          });

          new mxRubberband(graph);
  
  
    }
}