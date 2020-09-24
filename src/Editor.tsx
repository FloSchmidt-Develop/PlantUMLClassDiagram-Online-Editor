import React, { useState, useEffect } from "react";
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/styles';
import ExportPreviewDialog from './components/ExportPreview';

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
import MxGraphCreator from "./classes/controller/mxGraphCreator";
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
  mxConnectionHandler
} from "mxgraph-js";

import Class from "./classes/model/class";
import Connection from "./classes/model/connection";
import Package from "./classes/model/package";
import { Typography } from "@material-ui/core";
import Multiplicity from "./classes/model/multiplicity";
import EditingView from "./classes/view/editing/editingView";
import UserCreatedNewEdge from "./classes/controller/userCreatedNewEdge";
import CellLabel from "./classes/view/cellLables/cellLabel";
import MxClipboardHelper from "./helper/mxClipboardHelper";
import SaveAs from "./components/saveAs";
import DiagramPreview from "./components/diagramPreview";
import PumlPreview from "./components/pumlPreview";
import Note from "./classes/model/note";
import ChangeInteraction from "./classes/controller/mxGraphInteraction";
import GraphConfiguration from "./classes/controller/graphConfigurator";



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


      axios.post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(function (response){
        console.log(response.data);
      
        diagramCreator.createDiagram(response.data,filename);
        
        setDiagram(DiagramCreator.diagram[DiagramCreator.activeIndex]);
        setChange(true); 
      })
      .catch(function(error){
        alert('server ist not available: '+ error);
      });

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

      GraphConfiguration.configureGraph(graph);
      
      if(keyHandler == null) 
        keyHandler = new mxKeyHandler(graph);
      
      if(rubberBand == null)
        rubberBand = new mxRubberband(graph);


  
        //======Undo=======
        var listener = function(sender, evt)
        {        
          undoManager.undoableEditHappened(evt.getProperty('edit'));
        };
  
        graph.getModel().addListener(mxEvent.UNDO, listener);
        graph.getView().addListener(mxEvent.UNDO, listener);

  
        //is called when selection in mxGraph Change
        graph.getSelectionModel().addListener(mxEvent.CHANGE, function(sender, evt)
        {        
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
