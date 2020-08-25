import React, { Fragment, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import GridLayout from 'react-grid-layout';
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
  mxConstants,
  mxEdgeStyle,
  mxGraphHandler,
  mxEdgeHandler,
  mxUndoableEdit,
  mxCodec,
  mxEventObject
} from "mxgraph-js";

import Class from "./classes/parserRep/class";
import Connection from "./classes/parserRep/connection";
import ClassUpdateController from "./classes/controller/classUpdateController";
import Package from "./classes/parserRep/package";
import Point from "./classes/parserRep/point";
import { Typography } from "@material-ui/core";
import NameChanger from "./classes/controller/nameChanger";
import Named from "./interfaces/named";
import Multiplicity from "./classes/parserRep/multiplicity";
import EditingView from "./classes/view/editing/editingView";
import UserCreatedNewEdge from "./classes/controller/userCreatedNewEdge";
import CellLabel from "./classes/view/cellLables/cellLabel";
import MyObject from "./classes/parserRep/myObject";
import Observer from "./interfaces/observer";
import ValueChangeController from "./classes/controller/propertyController/cellValueChangeController";
import MxClipboardHelper from "./helper/mxClipboardHelper";
import SaveAs from "./components/saveAs";
import ExportProvider from "./ExportProvider";
import DiagramPreview from "./diagramPreview";
import PumlPreview from "./pumlPreview";



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

function CustomChange(this: any, model: any)
{
  this.model = model;
  this.previous = model;
  
};

CustomChange.prototype.execute = function()
{
  var tmp = this.model;
  this.model = this.previous;
  this.previous = tmp;
};

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
  var keyHandler;
  var rubberBand;
  var isDown : Boolean[] = [];
  

  const diagramCreator = new DiagramCreator();

  const onChange = (e: any) => {
    if(e.target.files[0] != null){
      setFile(e.target.files[0]);
      setFilename(e.target.files[0].name);
      console.log(e.target.files);
      
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
      setChange(change ? false : true);
      
    } catch (err) {
      
        alert('server ist not available: '+ err);
      
    }
  };

  //this is called evertime one of the states is changed
  useEffect(() => {
      
    if (typeof graph !== "undefined") {
      console.log('graph is undefined');
      
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
      console.log('graph isn´t undefined');
      
      let graph = new mxGraph(divGraph.current)
      let diag = diagramCreator.createDiagram(null, 'New Diagram');
      setUpEditor(graph);
      
      setGraph(graph);
      setDiagram(diag);
    }

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

      var style = graph.getStylesheet().getDefaultEdgeStyle();
      style[mxConstants.STYLE_ROUNDED] = true;
      style[mxConstants.STYLE_EDGE] = mxEdgeStyle.ElbowConnector;
      graph.alternateEdgeStyle = 'elbow=vertical';

      mxConnectionHandler.prototype.waypointsEnabled = true;
      
      if(keyHandler == null) 
        keyHandler = new mxKeyHandler(graph);
      
      if(rubberBand == null)
        rubberBand = new mxRubberband(graph);


      keyHandler.getFunction = function(evt)
      {
        if (evt != null)
        {

          return (mxEvent.isControlDown(evt) || (mxClient.IS_MAC && evt.metaKey)) ? this.controlKeys[evt.keyCode] : this.normalKeys[evt.keyCode];
        }
      
        return null;
      };

      keyHandler.bindKey(46, function(evt)
      {
        if (graph.isEnabled())
        {
          graph.removeCells();
        }
      });

      
      keyHandler.keyDown = function(evt)
      {
        //console.log(isDown);
        
        
        if (graph.isEnabled() && evt.ctrlKey && !isDown[evt.key]){
          if(evt.code === 'KeyC')
          {
            mxClipboard.copy(graph);
            isDown[evt.key] = true;
          }
          else if(evt.code === 'KeyV')
          {
            mxClipboard.paste(graph);
            isDown[evt.key] = true;
          }
        }
          
        

      };

      mxEvent.addListener(document, 'keyup', function(evt)
      {
        //console.log(evt);
        isDown[evt.key] = false;
      });




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

      graph.getLabel = function (cell) {

        //Cell with known value
        if(cell.value instanceof Class 
        || cell.value instanceof Connection 
        || cell.value instanceof Package 
        || cell.value instanceof Multiplicity)
        {        
          return CellLabel.CreateCellLabel(cell);
        }
  
        //Cell with not known value this is a Edge created by the User
        else
        {  
          if(cell.edge && cell.target != null && cell.source != null)
          {
            console.log('add new Connection');
            
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

      graph.isValidDropTarget = (cell,cells,evt) => {
        if(cell.value instanceof Class || cell.value instanceof Multiplicity){
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
        console.log(target);
        
        if(source.value instanceof Connection && target.value instanceof Connection)
          return false;
        else if(target.value instanceof Connection && (target.value as Connection).destinationElement.includes('('))
          return false;
        return true;
      }

      //Controller Delete Elements
      graph.isCellDeletable = function(cell){        
        if(cell.value != null){

          if(cell.value instanceof Class){
            graph.model.beginUpdate();
            cell.remove();
            graph.getModel().endUpdate();
            diagram?.removeClass(cell.value);
          }
          else if(cell.value instanceof Connection){
            console.log('delete Connection:');
            console.log(cell.value);
            console.log('----------------------');
            
            
            graph.model.beginUpdate();
            cell.remove();
            graph.getModel().remove((cell.value as Connection).multiplicity_left.vertex);
            graph.getModel().remove((cell.value as Connection).multiplicity_right.vertex);
            graph.getModel().endUpdate();
            diagram?.removeConnection(cell.value);

          }
          else if(cell.value instanceof Package){
            graph.model.beginUpdate();
            cell.remove();
            graph.getModel().endUpdate();

            diagram?.removePackage(cell.value, true);
            
            let children = cell.children;
            for (let index = 0; index < children?.length; index++) {
              graph.getModel().remove(children[index]);
              if(children[index]?.value instanceof Class)
                diagram?.removeClass(children[index].value);
            }              
          }

          
        }

        return true;
      }
      
      var listener = function(sender, evt)
      {        
        undoManager.undoableEditHappened(evt.getProperty('edit'));
      };

      graph.getModel().addListener(mxEvent.UNDO, listener);
      graph.getView().addListener(mxEvent.UNDO, listener);

      //Delete/Add Classes Packages Connections On Add/Remove/Undo/Redo/Copy
      graph.model.addListener(mxEvent.CHANGE, async function(sender, evt)
      {
        var changes = evt.getProperty('edit').changes;
        
        for (var i = 0; i < changes.length; i++)
        {
          var change = changes[i];
          
          
          if (change.constructor.name === 'mxChildChange')
          {
            console.log('mxChildChange');
            console.log(change);
            
            
            let child = change.child.value;
            if(child != null && child instanceof Class){
              let cls = child as Class;
  
              if(change.parent === null ){
                  //#1: 2,4; #4: 1
                  console.log('1');
                  
                  DiagramCreator.diagram[DiagramCreator.activeIndex].removeClass(cls);
              }
  
              else if(typeof change.parent.value === 'undefined'){
                
                if(change.previous === null){
                  //#1: 1 ; #4: 2
                  console.log('2');
                  DiagramCreator.diagram[DiagramCreator.activeIndex].addClass(cls);
                }
                else if(change.previous.value instanceof Package){
                  let temp = change.previous.value as Package;
                  //#2: 2
                  console.log('3');
                  temp.RemoveClassReference(cls);
                }
              }
  
              else if(change.parent.value instanceof Package){
                let pakg = change.parent.value as Package;
                //#1: 3
                if(change.previous === null){
                  console.log('4');
                  
                  DiagramCreator.diagram[DiagramCreator.activeIndex].addClass(cls);
                  pakg.AddClassReference(cls);
                }
                else if(typeof change.previous.value === 'undefined'){
                  console.log('5');
                  pakg.AddClassReference(cls);
                }
                else if(change.previous.value instanceof Package){
                  console.log('6');
                  let prev = change.previous.value as Package;
                  prev.RemoveClassReference(cls);
                  pakg.AddClassReference(cls)
                }
              }
             
            }

            //Add Remove support for Packages 
            else if(child != null && child instanceof Package){

              
              let pkg = child as Package;
              if(change.parent === null){
                console.log('Package 1');
                
                DiagramCreator.diagram[DiagramCreator.activeIndex].removePackage(pkg,true);
              }
              else if(change.parent.value instanceof Package ){
                
                if(change.previous != null && change.previous.value instanceof Package){      
                  console.log('Package 2');            
                  (change.previous.value as Package).RemovePackageReferences(pkg);
                }
                else if(change.previous == null){
                  console.log('Package 3');
                  DiagramCreator.diagram[DiagramCreator.activeIndex].addPackage(pkg);
                }
                (change.parent.value as Package).AddPackageReference(pkg);
                pkg.package = (change.parent.value as Package).getName();
              }
              else if(typeof change.parent.value === 'undefined'){
                if(change.previous === null){
                  console.log('Package 4');
                  DiagramCreator.diagram[DiagramCreator.activeIndex].addPackage(pkg);
                }
                else if(change.previous.value instanceof Package){       
                  console.log('Package 5');           
                  (change.previous.value as Package).RemovePackageReferences(pkg);
                }
              }
            }

            //Add Remove Support for Connections
            else if(child != null && child instanceof Connection){              
              let con = child as Connection;
              if(change.parent === null){
                DiagramCreator.diagram[DiagramCreator.activeIndex].removeConnection(con);
              }
              else if(typeof change.parent.value === 'undefined' || change.parent.value instanceof Package ){
                if(change.previous === null){
                  DiagramCreator.diagram[DiagramCreator.activeIndex].addConnection(con);
                }
              }
                       
            }
            
          }

          else if(change.constructor.name === 'mxValueChange'){
            
            ValueChangeController.valueChanged( change.value, change.previous);
          }
          
          else if(change.constructor.name === 'mxTerminalChange'){
            let child = change.cell;
            console.log(change);
            console.log(child);
            
            if(child != null && child.value instanceof Connection){
              
              
              
              let con = child.value as Connection;
              let changeSource = false;
              
              if(change.previous != null && change.previous.value instanceof Class){
                let previous = change.previous.value as Class
                
                
                previous.removeObserver(con);
                if(con.sourceElement == previous.alias){
                  changeSource = true;
                }
                else{
                  changeSource = false;
                }
              }
              else if(change.previous != null && change.previous.value instanceof Connection){
                let previous = change.previous.value as Connection;
                
                
                previous.removeObserver(con);
                if(con.sourceElement == '(' +previous.destinationElement + ',' + previous.sourceElement + ')'){
                  changeSource = true;
                }
                else{
                  changeSource = false;
                }
              }

              if(change.previous == null && child.target != null && child.target.value instanceof Connection){
                //Don't change anything
              }
              else if(change.terminal != null && change.terminal.value instanceof Class){
                let terminal = change.terminal.value as Class;

                terminal.registerObserver(con);
                if(changeSource){
                  con.sourceElement = terminal.alias;
                }
                else{
                  con.destinationElement = terminal.alias;
                }
              }
              else if(change.terminal != null && change.terminal.value instanceof Connection){
                let terminal = change.terminal.value as Connection;

                terminal.registerObserver(con);
                if(changeSource){
                  con.sourceElement = '(' + terminal.destinationElement + ',' + terminal.sourceElement + ')';
                }
                else{
                  con.destinationElement = '(' + terminal.destinationElement + ',' + terminal.sourceElement + ')';
                }
              }

            }
          }
          
        }

      var jsonObj = JSON.stringify(DiagramCreator.diagram[DiagramCreator.activeIndex],replacer);
      var obj = JSON.parse(jsonObj);

        const pumlContent = await axios.post("/export",obj);
        const linkContainer = await axios.post("/png",obj);
      
        console.log(pumlContent);
        

        ExportProvider.setChange(linkContainer.data, pumlContent.data)
      });

      function replacer(key,value)
      {
          if (key=="vertex") return undefined;
          else return value;
      }

      //Controller -- Handel moving of Classes Packages Connections
      graph?.model.addListener(mxEvent.CHANGE, function(sender, evt)
      {
        for (let index = 0; index < evt.properties?.changes?.length; index++) {

          let changedCell = evt.properties?.changes[index]?.cell;
          let geometry = evt.properties?.changes[index]?.geometry;

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
              pts.push(new Point(pt.x,pt.y));
              
            }
            changedConnection.points = pts;
          }
          if(changedCell != null && geometry != null && changedCell.value instanceof Package){
            let changedPackage = changedCell.value as Package;
            changedPackage.x = geometry.x;
            changedPackage.y = geometry.y;
            
            changedPackage.setHight(geometry.height);
            changedPackage.setWidth(geometry.width);
          }
        }
      });

      graph.getSelectionModel().addListener(mxEvent.CHANGE, function(sender, evt)
      {
        console.log(DiagramCreator.diagram)
        EditingView.CreateEditingView(sender,graph,editPanel);
             
      });



      let toolbar = new Toolbar();
      toolbar.getCreateToolbarContainer(graph);
  }

  return (
    <Fragment>
      <form onSubmit={onSubmit}>
        <div className="upload-section">
          <input 
            accept=".puml,.json" 
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
          <Paper id="toolBar">Hallo</Paper>
        </Grid>
        <Grid xs={6} item>
              <Paper className="graph-container" ref={divGraph} id="divGraph"></Paper>
        </Grid>
        <Grid xs={3} item className="graph-preview">
          <Paper className="preview-img-container">
            <DiagramPreview/>
          </Paper>
          <Paper className="preview-puml">
            <PumlPreview/>
          </Paper>

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
        <SaveAs/>

        
      </div>
    </Fragment>
  );
};

export default withStyles(styles)(Editor);
