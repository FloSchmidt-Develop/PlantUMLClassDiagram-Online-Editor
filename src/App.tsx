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

    if (!mxClient.isBrowserSupported()) {
      mxUtils.error("Browser is not supported!", 200, false);
    } 


    else {

      console.log('neues Laden');
      

      const graph = new mxGraph(divGraph.current);
      graph.setConnectable(true);
      graph.setHtmlLabels(true);
      

      const parent = graph.getDefaultParent();



      mxEvent.disableContextMenu(divGraph.current);
    if(typeof diagram !== 'undefined' ){
      var mxGraphCreator = new MxGraphCreator(graph,diagram);

      graph.getModel().beginUpdate();

      mxGraphCreator.start();

      graph.getModel().endUpdate();
    }

/*
      try {
        //-----Test Umgebung-----
        console.log(diagram);
        var count = diagram?.class_declarations.length ? diagram?.class_declarations.length : 0;

        //run over every Class
        for (let index = 0; index < count; index++) {
          let offest = 5;
          let element = diagram?.class_declarations[index];
          if(typeof element !== 'undefined' ){

            let container = graph.insertVertex(parent, null, '', 20 + index * 500, 20, 300, 80);
            graph.insertVertex(container, null, element.name, 0, offest, 300, 25);

            offest += 30;

            for (let index = 0; index < element.attributes.length; index++) {
              let tempAttr = element.attributes[index];
              graph.insertVertex(container, null, tempAttr.visibility + ' ' + tempAttr.name + ': ' + tempAttr.dataType, 0, offest, 300, 20);   
              offest += 20;     
            }

            for (let index = 0; index < element.methodes.length; index++) {
              let tempMeth = element.methodes[index];
              graph.insertVertex(container, null, 
                tempMeth.visibility + ' ' + tempMeth.name 
                + '(' + tempMeth.attributeList?.map((e) => (e.name + ': ' + e.dataType) ) + ')' 
                + ((tempMeth.dataType !== '') ? ( ': ' + tempMeth.dataType) : '')
                , 0, offest, 300, 20);   
              offest += 20;     
            }


          }
          
        }


        //const v1 = graph.insertVertex(parent, null, "Hello,", 20, 20, 80, 30);
        //const v2 = graph.insertVertex(parent, null, "World!", 200, 150, 80, 30);
        //const e1 = graph.insertEdge(parent, null, "", v1, v2);
      } finally {
        graph.getModel().endUpdate();
      }
      */
     graph.getModel().endUpdate();
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
