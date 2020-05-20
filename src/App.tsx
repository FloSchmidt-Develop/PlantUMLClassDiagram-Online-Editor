import React, { Fragment, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import './App.css';
import axios from 'axios';
import IDiagram from './interfaces/diagram'
import DiagramCreator from './helper/diagramCreator';
import MxGraphCreator from './helper/mxGraphCreator';

import {
  mxGraph,
  mxRubberband,
  mxKeyHandler,
  mxClient,
  mxUtils,
  mxEvent
} from "mxgraph-js";




axios.defaults.baseURL = 'http://localhost:1234';

const App = () => {
  const [file, setFile] = useState('');
  const [filename, setFilename] = useState('');
  const [diagram, setDiagram] = useState<IDiagram>();
  const [graph, setGraph] = useState();
  const divGraph = React.useRef<HTMLDivElement>(null);

  const el = document.createElement("div");
  console.log(el);
  

  const diagramCreator = new DiagramCreator();

  const onChange = (e: any) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

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
        graph.autoSizeCellsOnAdd = true;
        
        mxEvent.disableContextMenu(divGraph.current);

      if(typeof diagram !== 'undefined' ){
        var mxGraphCreator = new MxGraphCreator(graph,diagram);

        graph.getModel().beginUpdate();

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
        <div className='custom-file mb-4'>
          <input
            type='file'
            className='custom-file-input'
            id='customFile'
            onChange={onChange}
          />
          <label className='custom-file-label' htmlFor='customFile'>
            {filename}
          </label>
        </div>

        <input
          type='submit'
          value='Upload'
          className='btn btn-primary btn-block mt-4'
        />
        </form>
        <div          
          className="graph-container"
          ref={divGraph}
          id="divGraph">
          </div>
    </Fragment>
  );
};

export default App
