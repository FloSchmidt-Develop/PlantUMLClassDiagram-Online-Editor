import React, { Fragment, useState, useEffect } from "react";
import ReactDOM from "react-dom";

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
  mxImageExport,
  mxRubberband,
  mxUndoManager,
  mxConnectionHandler,
  mxConstants
} from "mxgraph-js";
import Class from "./classes/parserRep/class";
import Connection from "./classes/parserRep/connection";
import ClassUpdateController from "./classes/controller/classUpdateController";
import Package from "./classes/parserRep/package";

axios.defaults.baseURL = "http://localhost:4000";

const Editor = (props) => {
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

  const exportDiagram = async () => {
    var xmlDoc = mxUtils.createXmlDocument();
    var root = xmlDoc.createElement('output');
    xmlDoc.appendChild(root);

    var xmlCanvas = new mxXmlCanvas2D(root);
    var imgExport = new mxImageExport();
    imgExport.drawState(graph.getView().getState(graph.model.root), xmlCanvas);

    var bounds = graph.getGraphBounds();
    var w = Math.ceil(bounds.x + bounds.width);
    var h = Math.ceil(bounds.y + bounds.height);

    var xml = mxUtils.getXml(root);
    let requestData = 'http://localhost:8000?format=png&w='
     + w + '&h=' + h + '&xmldata=' + encodeURIComponent(xml);

    

    const res = await axios.get(requestData);
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
          changedConnection.geometry = geometry;
        }
        if(changedCell != null && geometry != null && changedCell.value instanceof Package){
          let changedPackage = changedCell.value as Package;
          changedPackage.x = geometry.x;
          changedPackage.y = geometry.y;
          changedPackage.setHight(geometry.hight);
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
            className="my-button-style"
            type="file"
            id="customFile"
            onChange={onChange}
          />
          <label className="custom-file-label" htmlFor="customFile">
            {filename}
          </label>
          <input className="my-button-style" type="submit" value="Upload" />
          <input className="exportButton" type="button" onClick={exportDiagram} value='Export' />
        </div>
      </form>
      <div className="graph-container" ref={divGraph} id="divGraph"></div>
      <div className="edit-container">
        <div ref={editPanel} id="editPanel">
          <p>nothing Selected</p>
        </div>
      </div>
      <div id='zoomButtons'>
        <button type='button' id='zoomIn' onClick={zoomIn} >+</button>
        <button type='button' id='zoomOut' onClick={zoomOut} >-</button>
      </div>
      <div id='editButtons'>
        <button type='button' id='undo' disabled={false} onClick={undo} >undo</button>
        <button type='button' id='redo' disabled={false} onClick={redo} >redo</button>
        <button type='button' id='delete' onClick={remove} >Delete</button>
      </div>
    </Fragment>
  );
};

export default Editor;
