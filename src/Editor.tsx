import React, { useState, useEffect } from "react";
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
  mxClipboard,
  mxRubberband,
  mxUndoManager,
  mxConstants,
  mxEdgeStyle,
  mxGraphHandler,
  mxEdgeHandler,
} from "mxgraph-js";

import Class from "./classes/parserRep/class";
import Connection from "./classes/parserRep/connection";
import Package from "./classes/parserRep/package";
import { Typography } from "@material-ui/core";
import Multiplicity from "./classes/parserRep/multiplicity";
import EditingView from "./classes/view/editing/editingView";
import UserCreatedNewEdge from "./classes/controller/userCreatedNewEdge";
import CellLabel from "./classes/view/cellLables/cellLabel";
import MxClipboardHelper from "./helper/mxClipboardHelper";
import SaveAs from "./components/saveAs";
import DiagramPreview from "./diagramPreview";
import PumlPreview from "./pumlPreview";
import Note from "./classes/parserRep/note";
import ChangeInteraction from "./classes/controller/mxGraphInteraction";



axios.defaults.baseURL = "http://localhost:4000";

const styles = theme => ({
  grid: {
    marginTop: '50px',
  },
  input: {
    display: 'none',
  },
  filename: {
    margin: '0px 20px',
    paddingTop: '5px',
  }
});


const Editor = (props) => {
  const { classes } = props;
  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("");
  const [diagram, setDiagram] = useState<IDiagram>();
  const [graph, setGraph] = useState();
  const [change, setChange] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const divGraph = React.useRef<HTMLDivElement>(null);
  const editPanel = React.useRef<HTMLDivElement>(null);
  const [undoManager, setUndoManager] = React.useState(new mxUndoManager());
  new mxUndoManager();
  var keyHandler;
  var rubberBand;
  

  const diagramCreator = new DiagramCreator();

//======Start From Data
  const onChange = (e: any) => {
    if(e.target.files[0] != null){
      setFile(e.target.files[0]);
      setFilename(e.target.files[0].name);
      
    }

  };

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
      console.log(res.data);
      
      diagramCreator.createDiagram(res.data,filename);
      
      setDiagram(DiagramCreator.diagram[DiagramCreator.activeIndex]);
      setChange(true);     
      
    } catch (err) {
      
        alert('server ist not available: '+ err);
      
    }
  };
  //===========End From Data

  //this is called evertime one of the states is changed
  useEffect(() => {
      
    if (graph != null ) {
      graph.getModel().clear();
      if (!mxClient.isBrowserSupported()) {
        mxUtils.error("Browser is not supported!", 200, false);
      } 
      else {
          setUpEditor();
          if (diagram != null) {          
            var mxGraphCreator = new MxGraphCreator(graph, diagram);
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
      setGraph(graph);
      setUndoManager(new mxUndoManager());
      setDiagram(diag);
      setUpEditor();
    }

  });

  //Methods that are represent by the Buttons
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
  const toggleView = () => {
    setIsVisible(!isVisible);
  }

  const setUpEditor = (): void => {
    if(graph == null)
      return;
    var vertexStyle  = graph.getStylesheet().getDefaultVertexStyle();
      vertexStyle[mxConstants.STYLE_OVERFLOW] = 'width';

      var style = graph.getStylesheet().getDefaultEdgeStyle();
      style[mxConstants.STYLE_ROUNDED] = true;
      style[mxConstants.STYLE_EDGE] = mxEdgeStyle.ElbowConnector;
      graph.alternateEdgeStyle = 'elbow=vertical';
      
      if(keyHandler == null) 
        keyHandler = new mxKeyHandler(graph);
      
      if(rubberBand == null)
        rubberBand = new mxRubberband(graph);

      mxGraphHandler.prototype.guidesEnabled = true;
      mxEdgeHandler.prototype.snapToTerminals = true;
      mxGraphHandler.prototype.cloneEnabled = false;

      graph.setConnectableEdges(true);
      graph.setAllowDanglingEdges(false);
      graph.setConnectable(true);
      graph.setHtmlLabels(true);
      graph.setCellsResizable(true);
      graph.setResizeContainer(false);
      graph.isDropEnabled  = () => true;
      graph.isEscapeEnabled  = () => true;
      graph.isExtendParentsOnMove = () => true;
      graph.isExtendParentsOnAdd = () => true;
      graph.isCellEditable = () => false;
      graph.allowNegativeCoordinates = false;
      graph.cloneInvalidEdges = false;
      graph.zoomTo( DiagramCreator.diagram[DiagramCreator.activeIndex].scale); 

      graph.isValidDropTarget = (cell,cells,evt) => {
        if(cell.value instanceof Class || cell.value instanceof Multiplicity || cell.value instanceof Note){
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
        if(source.value instanceof Connection && target.value instanceof Connection)
          return false;
        else if(target.value instanceof Connection && (target.value as Connection).destinationElement.includes('('))
          return false;
        return true;
      }

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

      mxClipboard.copy = function(graph, cells)
      {
        return MxClipboardHelper.Copy(graph,cells);
      };

      mxClipboard.paste = function(graph)
      {
        MxClipboardHelper.Paste(graph);
      };

      //======Undo=======
      var listener = function(sender, evt)
      {        
        undoManager.undoableEditHappened(evt.getProperty('edit'));
      };

      graph.getModel().addListener(mxEvent.UNDO, listener);
      graph.getView().addListener(mxEvent.UNDO, listener);

      //Delete/Add Classes Packages Connections On Add/Remove/Undo/Redo/Copy
      graph.getModel().addListener(mxEvent.CHANGE, function(sender, evt)
      {
        ChangeInteraction.ModelChange(sender,evt);
      });

      //is called when selection in mxGraph Change
      graph.getSelectionModel().addListener(mxEvent.CHANGE, function(sender, evt)
      {        
        console.log(DiagramCreator.diagram[DiagramCreator.activeIndex]);
        
        EditingView.CreateEditingView(sender,graph,editPanel);       
      });



      let toolbar = new Toolbar();
      toolbar.getCreateToolbarContainer(graph);
  }

  return (
    <div key={props.key}>
      <form onSubmit={onSubmit}>
        <div className="upload-section">
          <input 
            accept=".puml,.json" 
            className={classes.input} 
            id="raised-button-file"  
            type="file" 
            onChange={onChange}
            /> 
          <label htmlFor="raised-button-file"> 
            <Button startIcon={<FolderOpenIcon/>} variant="contained" color="primary" component="span" className={classes.button}> 
              Open File 
            </Button> 
          </label> 
          <Typography className={classes.filename}>
            {filename === '' ? 'no File selected' : filename}
          </Typography>
          <Button  variant="contained" disabled={filename === '' ? true : false} 
          color="primary" startIcon={<CloudUploadIcon/>} 
          className="my-button-style" type="submit">Upload</Button>
          <ExportPreviewDialog />
        </div>
      </form>
      <Grid container className={classes.grid} spacing={2}>
        <Grid xs={1} item>
          <Paper id="toolBar">Toolbar</Paper>
        </Grid>
        <Grid xs={isVisible ? 6 : 9} item>
          <Paper className="graph-container" ref={divGraph} id="divGraph"></Paper>
        </Grid>
        <Grid hidden={!isVisible} xs={3} item className="graph-preview">
          <Paper className="preview-img-container">
            <DiagramPreview/>
          </Paper>
          <Paper className="preview-puml">
            <PumlPreview/>
          </Paper>
        </Grid>
        <Grid xs={2} item className={classes.edit}>
            <Paper ref={editPanel} id="editPanel" className="edit-container">
              <h3>no Element Selected</h3>
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
        <SaveAs/>
        <Button color="primary" variant="contained" onClick={toggleView} >{isVisible ? 'Hide Preview' : 'show Preview'}</Button>

        
      </div>
    </div>
  );
};

export default withStyles(styles)(Editor);
