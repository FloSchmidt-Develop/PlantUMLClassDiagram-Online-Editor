import React, { Fragment, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import './App.css';
import axios from 'axios';
import IDiagram from './interfaces/diagram'
import DiagramCreator from './helper/diagramCreator';
import MxGraphCreator from './helper/mxGraphCreator';

import {
  mxGraph,
  mxImage,
  mxConstraintHandler,
  mxClient,
  mxUtils,
  mxEvent,
  mxRubberband,
  mxShape,
  mxEdgeHandler,
  mxConnectionConstraint,
  mxPoint,
  mxConstants,
  mxRectangle
} from "mxgraph-js";




axios.defaults.baseURL = 'http://localhost:4000';

function useForceUpdate(){
  const [value, setValue] = useState(0); // integer state
  return () => setValue(value => ++value); // update the state to force render
}

const App = () => {
  const [file, setFile] = useState('');
  const [filename, setFilename] = useState('');
  const [diagram, setDiagram] = useState<IDiagram>();
  const [graph, setGraph] = useState();
  const divGraph = React.useRef<HTMLDivElement>(null);
  const editPanel = React.useRef<HTMLDivElement>(null);

  const forceUpdate = useForceUpdate();

  const diagramCreator = new DiagramCreator();

  const onChange = (e: any) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const onUpdate = (e: any) => {
    console.log('update');
    forceUpdate();
    
  }

  const onSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await axios.post('/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
      });
      
      console.log(res.data);
      
      var diag = diagramCreator.createDiagram(res.data);
      console.log(diag);
      if (typeof graph === 'undefined') {
        setGraph(new mxGraph(divGraph.current));
      }

      setDiagram(diag);
      
    }
    catch (err) {
      console.log(err);
      /*
      if (err.response ? err.response.status === 500) {
        setMessage('There was a problem with the server');
      } else {
        setMessage(err.response.data.msg);
      }
      */
    }

    
  }

  //this is called evertime one of the states is changed
  useEffect(() => {

    if (typeof graph !== 'undefined') {
      if (!mxClient.isBrowserSupported()) {
        mxUtils.error("Browser is not supported!", 200, false);
      } 

      else {

        graph.setConnectable(true);
        graph.setHtmlLabels(true);
        //graph.autoSizeCellsOnAdd = true;

        mxEvent.disableContextMenu(divGraph.current);

      if(typeof diagram !== 'undefined' ){
        var mxGraphCreator = new MxGraphCreator(graph,diagram,editPanel);
        
        

        graph.getModel().beginUpdate();

        graph.removeCells(graph.getChildVertices(graph.getDefaultParent()));

        mxGraphCreator.start();

        graph.getModel().endUpdate();
      }
      graph.getModel().endUpdate();
      }
  }
  });

  return(
    <Fragment>
      <form onSubmit={onSubmit}>
        <div className='upload-section'>
          <input
            className='my-button-style'
            type='file'
            id='customFile'
            onChange={onChange}
          />
          <label className='custom-file-label' htmlFor='customFile'>
            {filename}
          </label>
          <input
          className='my-button-style'
          type='submit'
          value='Upload'
        />
        </div>   
        </form>
        <div          
          className="graph-container"
          ref={divGraph}
          id="divGraph">
          </div>
          <div className="edit-container">
          <div 
          ref={editPanel}
          id='editPanel'>
            <p>nothing Selected</p>
        </div>
        <input
            type='button'
            className='custom-button'
            value='OK'
            onClick={onUpdate}
          />
          </div>
      

    </Fragment>
  );
};

export default App
