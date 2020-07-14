import React, { Fragment, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/styles';
import ExportPreviewDialog from './ExportPreview';

import UndoIcon from '@material-ui/icons/Undo';
import RedoIcon from '@material-ui/icons/Redo';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import DeleteForeverSharpIcon from '@material-ui/icons/DeleteForeverSharp';
import ZoomInSharpIcon from '@material-ui/icons/ZoomInSharp';
import ZoomOutSharpIcon from '@material-ui/icons/ZoomOutSharp';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';

import "./App.css";
import axios from "axios";
import IDiagram from "./interfaces/diagram";
import DiagramCreator from "./helper/diagramCreator";
import MxGraphCreator from "./helper/mxGraphCreator";
import Toolbar from './classes/view/toolbar/toolbar';

import {
  mxGraph,
  mxClient,
  mxUtils,
  mxEvent,
  mxKeyHandler,
  mxXmlCanvas2D,
  mxClipboard,
  mxRubberband,
  mxUndoManager,
  mxConnectionHandler,
  mxConstants
} from "mxgraph-js";

import Class from "./classes/parserRep/class";
import Connection from "./classes/parserRep/connection";
import ClassUpdateController from "./classes/controller/classUpdateController";
import Package from "./classes/parserRep/package";
import Point from "./classes/parserRep/point";
import { Typography } from "@material-ui/core";

axios.defaults.baseURL = "http://localhost:4000";

const styles = theme => ({
  grid: {
    marginTop: '50px',
  },
  input: {
    display: 'none',
  },
  edit: {
  }
});

const Editor = (props) => {
  const { classes } = props;
  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("");
  const [diagram, setDiagram] = useState<IDiagram>();
  const [graph, setGraph] = useState();
  const [change, setChange] = useState(false);
  const divGraph = React.useRef<HTMLDivElement>(null);
  const editPanel = React.useRef<HTMLDivElement>(null);
  const undoManager = new mxUndoManager();

  const diagramCreator = new DiagramCreator();

  const onChange = (e: any) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  function replacer(key,value)
{
    if (key=="vertex") return undefined;
    else return value;
}

  const exportDiagram = async () => {
   var jsonObj = JSON.stringify(DiagramCreator.diagram[DiagramCreator.activeIndex],replacer);
    var obj = JSON.parse(jsonObj);
    
    const res = await axios.post("/export",obj);
    downloadTxtFile(res.data)
    

  };

  const downloadTxtFile = (content) => {
    const element = document.createElement("a");
    const file = new Blob([content], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = "myFile.puml";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  }

  const onSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      
      diagramCreator.createDiagram(res.data,filename);

      if (typeof graph === "undefined") {
        setGraph(new mxGraph(divGraph.current));
      }

      setDiagram(DiagramCreator.diagram[DiagramCreator.activeIndex]);
      setChange(change ? false : true);
      
    } catch (err) {
      /*
      if (err.response ? err.response.status === 500) {
        setMessage('There was a problem with the server');
      } else {
        setMessage(err.response.data.msg);
      }
      */
    }
  };

  //this is called evertime one of the states is changed
  useEffect(() => {
      
    if (typeof graph !== "undefined") {
      if (!mxClient.isBrowserSupported()) {
        mxUtils.error("Browser is not supported!", 200, false);
      } 
      else {

       setUpEditor(graph);

      

        if (typeof diagram !== "undefined") {
          var mxGraphCreator = new MxGraphCreator(graph, diagram, editPanel);

          graph.getModel().beginUpdate();
          mxGraphCreator.start();
          graph.getModel().endUpdate();
        }
        graph.getModel().endUpdate();
      }
    }
    else{
      let graph = new mxGraph(divGraph.current)
      let diag = diagramCreator.createDiagram(null, 'New Diagram');

      setUpEditor(graph);
      
        
      
      setGraph(graph);
      setDiagram(diag);
    }


    graph?.model.addListener(mxEvent.CHANGE, function(sender, evt)
    {
      for (let index = 0; index < evt.properties?.changes?.length; index++) {
        let changedCell = evt.properties?.changes[index]?.cell;
        let geometry = evt.properties?.changes[index]?.geometry
        if(changedCell != null && geometry != null && changedCell.value instanceof Class){
          let changedClass = changedCell.value as Class;
          changedClass.x = geometry.x;
          changedClass.y = geometry.y;
          changedClass.setHight(geometry.hight);
          changedClass.setWidth(geometry.width);
          //ClassUpdateController.updateClassValues(graph,changedCell,changedClass)
        }
        if(changedCell != null && geometry != null && changedCell.value instanceof Connection){
          let changedConnection = changedCell.value as Connection;
          let pts: Point[] = [];
          for (let index = 0; index < geometry?.points?.length; index++) {
            const pt = geometry.points[index];
            console.log(pt);
            pts.push(new Point(pt.x,pt.y));
            
          }
          console.log(pts);
          changedConnection.points = pts;
        }
        if(changedCell != null && geometry != null && changedCell.value instanceof Package){
          let changedPackage = changedCell.value as Package;
          changedPackage.x = geometry.x;
          changedPackage.y = geometry.y;
          console.log(geometry);
          
          changedPackage.setHight(geometry.height);
          changedPackage.setWidth(geometry.width);
        }
      }
    });
  });

  const zoomIn = () => {
    graph.zoomIn();
    DiagramCreator.diagram[DiagramCreator.activeIndex].scale = graph.view.scale;
  }
  const zoomOut = () => {
    graph.zoomOut();
    DiagramCreator.diagram[DiagramCreator.activeIndex].scale = graph.view.scale;
  }
  const undo = () => {
    undoManager.undo();
  }
  const redo = () => {
    undoManager.redo();
  }
  const remove = () => {
    graph.removeCells();
  }
  const copy = () =>{
    mxClipboard.copy(graph);
  }
  const paste = () =>{
    mxClipboard.paste(graph);
  }

  const setUpEditor = (graph: any): void => {

    var vertexStyle  = graph.getStylesheet().getDefaultVertexStyle();
      vertexStyle[mxConstants.STYLE_OVERFLOW] = 'width';

      var edgeStyle  = graph.getStylesheet().getDefaultEdgeStyle();
      edgeStyle[mxConstants.STYLE_EDGE] = 'orthogonalEdgeStyle';

      mxConnectionHandler.prototype.waypointsEnabled = true;
      graph.setConnectableEdges(true);
      graph.setAllowDanglingEdges(false);
      new mxRubberband(graph);
      graph.setConnectable(true);
      graph.setHtmlLabels(true);
      graph.isDropEnabled  = () => true;
      graph.isEscapeEnabled  = () => true;
      graph.isExtendParentsOnMove = () => true;
      graph.isExtendParentsOnAdd = () => true;

      mxClipboard.copy = function(graph, cells)
      {
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
      };

      mxClipboard.paste = function(graph)
      {
        if (!mxClipboard.isEmpty())
        {
          var cells = graph.getImportableCells(mxClipboard.getCells());
          var delta = mxClipboard.insertCount * mxClipboard.STEPSIZE;
          var parent = graph.getDefaultParent();

          graph.model.beginUpdate();
          try
          {
            console.log('Paste');
            
            console.log(cells);
            
            for (var i = 0; i < cells.length; i++)
            {
              var tmp = (mxClipboard.parents != null && graph.model.contains(mxClipboard.parents[i])) ?
                  mxClipboard.parents[i] : parent;
              var tempObj = cells[i].value;
             
              //paste class
              if(tempObj instanceof Class){
                let newCls = (tempObj as Class).cloneModel();
                newCls.setName(newCls.getName() + 'Copy');
                DiagramCreator.diagram[DiagramCreator.activeIndex].addClass(newCls);
                console.log('--Class Added---');
                cells[i].value = newCls;
                cells[i] = graph.importCells([cells[i]], delta, delta, tmp)[0];
              }
              //import package
              else if(tempObj instanceof Package){
                let newPackage = (tempObj as Package).cloneModel();
                newPackage.setName('copy')
                DiagramCreator.diagram[DiagramCreator.activeIndex].addPackage(newPackage);
                let children = cells[i].children;
                if(children != null)
                for (let index = 0; index < children.length; index++) {
                  const child = children[index];
                  if(child.value instanceof Class){
                    let newCls = (child.value as Class).cloneModel();
                    DiagramCreator.diagram[DiagramCreator.activeIndex].addClass(newCls);
                    cells[i].value = newCls;
                    newPackage.AddClassReference(newCls);
                  }
                  
                }
                cells[i].value = newPackage;
                cells[i] = graph.importCells([cells[i]], delta, delta, tmp)[0];
              }
              if(tempObj instanceof Connection){
                console.log('Connection Added');
                console.log(cells[i]);
                let newConn = (tempObj as Connection)
                console.log(newConn);
                //cells[i].value = newConn;
                cells[i] = graph.importCells([cells[i]], delta, delta, tmp)[0];
                
                /*
                DiagramCreator.diagram[DiagramCreator.activeIndex].addClass(newCls);
                console.log('--Class Added---');
                cells[i].value = newCls;
                cells[i] = graph.importCells([cells[i]], delta, delta, tmp)[0];
                */
              }
              
              //DiagramCreator.diagram[DiagramCreator.activeIndex].
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
      };

      graph.isValidDropTarget = (cell,cells,evt) => {
        if(cell.value instanceof Class){
          return false;
        }
        return true;
      }
      graph.zoomTo( DiagramCreator.diagram[DiagramCreator.activeIndex].scale); 

      graph.isValidTarget  = (cell) => {
        if(cell.value instanceof Package)
          return false;
        return true;
        
      }
      graph.isValidSource = (cell) => {
        if(cell.value instanceof Connection || cell.value instanceof Package)
          return false;
        return true;
      }
      graph.isValidConnection = (source,target) => {
        if(source.value instanceof Connection && target.value instanceof Connection)
          return false;
        return true;
      }

      graph.isCellDeletable = function(cell){
        if(cell.value != null){

          if(cell.value instanceof Class){
            graph.model.beginUpdate();
            cell.setVisible(false);
            graph.getModel().endUpdate();
            diagram?.removeClass(cell.value);
          }
          else if(cell.value instanceof Connection){
            graph.model.beginUpdate();
            cell.setVisible(false);
            graph.getModel().endUpdate();
            diagram?.removeConnection(cell.value);
            graph.getModel().remove((cell.value as Connection).multiplicity_left.vertex);
            graph.getModel().remove((cell.value as Connection).multiplicity_right.vertex);
          }
          else if(cell.value instanceof Package){
            cell.setVisible(false);

            diagram?.removePackage(cell.value);
            
            let children = cell.children;
            for (let index = 0; index < children?.length; index++) {
              graph.getModel().remove(children[index]);
              if(children[index].value instanceof Class)
                diagram?.removeClass(children[index].value);
            }              
          }

          
        }

        return true;
      }
      
      var keyHandler = new mxKeyHandler(graph);
      keyHandler.bindKey(46, function(evt)
      {
         graph.removeCells();
      });

      var listener = function(sender, evt)
      {
        undoManager.undoableEditHappened(evt.getProperty('edit'));
      };

      graph.getModel().addListener(mxEvent.UNDO, listener);
      graph.getView().addListener(mxEvent.UNDO, listener);

      let toolbar = new Toolbar();
      toolbar.getCreateToolbarContainer(graph);
  }

  return (
    <Fragment>
      <form onSubmit={onSubmit}>
        <div className="upload-section">
          <input 
            accept=".puml" 
            className={classes.input} 
            id="raised-button-file" 
            multiple 
            type="file" 
            onChange={onChange}
            /> 
            <label htmlFor="raised-button-file"> 
            <Button startIcon={<FolderOpenIcon/>} variant="contained" color="primary" component="span" className={classes.button}> 
              Open File 
            </Button> 
          </label> 
          <Button  variant="contained" color="primary" startIcon={<CloudUploadIcon/>} className="my-button-style" type="submit">Upload</Button>
          <ExportPreviewDialog />
        </div>
      </form>
      <Grid container className={classes.grid} spacing={2}>
        <Grid xs={1} item>
          <Paper id="toolBar">Hallo</Paper>
        </Grid>
        <Grid xs={9} item>
          <Paper className="graph-container" ref={divGraph} id="divGraph"></Paper>
        </Grid>
        <Grid xs={2} item className={classes.edit}>
          <Paper className="edit-container">
            <div ref={editPanel} id="editPanel">
              <h3>no Element Selected</h3>
            </div>
          </Paper>
        </Grid>
      </Grid>


      <div id='zoomButtons'>
        <IconButton onClick={zoomIn} >
          <ZoomInSharpIcon/>
        </IconButton>
        <IconButton onClick={zoomOut} >
          <ZoomOutSharpIcon/>
        </IconButton>
      </div>
      <div id='editButtons'>
        <Button variant="contained" color="primary" startIcon={<UndoIcon/>} onClick={undo} >undo</Button>
        <Button variant="contained" color="primary" startIcon={<RedoIcon/>} onClick={redo} >redo</Button>
        <Button variant="contained" color="primary" startIcon={<FileCopyIcon/>} onClick={copy} >copy</Button>
        <Button variant="contained" color="primary" startIcon={<FileCopyIcon/>}  onClick={paste} >paste</Button>
        <Button variant="contained" color="secondary" startIcon={<DeleteForeverSharpIcon/>} onClick={remove} >Delete</Button>
        
      </div>
    </Fragment>
  );
};

export default withStyles(styles)(Editor);
