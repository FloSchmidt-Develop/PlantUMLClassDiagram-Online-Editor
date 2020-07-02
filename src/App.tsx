import React, { Fragment, useState, useEffect } from "react";
import ReactDOM from "react-dom";

import "./App.css";
import axios from "axios";
import IDiagram from "./interfaces/diagram";
import DiagramCreator from "./helper/diagramCreator";
import MxGraphCreator from "./helper/mxGraphCreator";
import Toolbar from './classes/view/toolbar/toolbar';
import Bild from './images/Arrow_big.jpg';

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
  mxGraphHandler
} from "mxgraph-js";
import Class from "./classes/parserRep/class";
import { callbackify } from "util";
import Connection from "./classes/parserRep/connection";
import Package from "./classes/parserRep/package";
import Diagram from "./interfaces/diagram";

axios.defaults.baseURL = "http://localhost:4000";

const App = () => {
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

      console.log(res);
      

      diagramCreator.createDiagram(res.data);

      if (typeof graph === "undefined") {
        setGraph(new mxGraph(divGraph.current));
      }

      setDiagram(DiagramCreator.diagram);
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

        //mxConnectionHandler.prototype.waypointsEnabled = true;
        graph.setConnectableEdges(true);
        graph.setAllowDanglingEdges(false);
        new mxRubberband(graph);
        graph.setConnectable(true);
        graph.setHtmlLabels(true);
        mxEvent.disableContextMenu(divGraph.current);
        mxGraphHandler.shouldRemoveCellsFromParent = function(parent,cells,evt){
          console.log('shouldRemoveCellsFromParent');
          console.log(parent);
        }

        //delete of cells
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
            else{
              console.log('delete other');
              
              console.log(cell);
              
            }

            
          }

          return true;
        }
        var keyHandler = new mxKeyHandler(graph);
        keyHandler.bindKey(46, function(evt)
        {
            graph.removeCells();
        });


        if (typeof diagram !== "undefined") {
          console.log('start');
          console.log(diagram);
          
          
          var mxGraphCreator = new MxGraphCreator(graph, diagram, editPanel);

          graph.getModel().beginUpdate();

          graph.removeCells(graph.getChildVertices(graph.getDefaultParent()));

          mxGraphCreator.start();

          graph.getModel().endUpdate();
        }
        graph.getModel().endUpdate();
        


        
      }
    }
    else{
      let graph = new mxGraph(divGraph.current)
      let diag = diagramCreator.createDiagram(null);
      

      setGraph(graph);
      setDiagram(diag);
      console.log(diag);
      
      Toolbar.getCreateToolbarContainer(graph,diag as IDiagram);
      
      // Undo/redo
      var listener = function(sender, evt)
      {
        undoManager.undoableEditHappened(evt.getProperty('edit'));
      };

      graph.getModel().addListener(mxEvent.UNDO, listener);
      graph.getView().addListener(mxEvent.UNDO, listener);
      /*
      document.body.appendChild(mxUtils.button('Undo', function()
      {
        undoManager.undo();
      }));
      
      document.body.appendChild(mxUtils.button('Redo', function()
      {
        undoManager.redo();
      }));
      */

    }
  });

  const zoomIn = () => {
    graph.zoomIn();
  }
  const zoomOut = () => {
    graph.zoomOut();
  }
  const undo = () => {
    console.log(undoManager);
    
    undoManager.undo();
  }
  const redo = () => {
    undoManager.redo();
  }
  const remove = () => {
    graph.removeCells();
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
        <button type='button' id='undo' disabled={true} onClick={undo} >undo</button>
        <button type='button' id='redo' disabled={true} onClick={redo} >redo</button>
        <button type='button' id='delete' onClick={remove} >Delete</button>
      </div>


    </Fragment>
  );
};

export default App;
