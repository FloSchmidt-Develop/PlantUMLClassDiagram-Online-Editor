import {
    mxToolbar,
    mxCell,
    mxGeometry,
    mxUtils
  } from "mxgraph-js";
import Class from "../../parserRep/class";
import Diagram from "../../parserRep/diagram";




export default class Toolbar{

    public static getCreateToolbarContainer(graph: any, diagram: Diagram){

        var tbContainer = document.getElementById('toolbar');
        if(tbContainer === null){
            tbContainer = document.createElement('div');
            tbContainer.className = 'toolbar';
            tbContainer.id = 'toolbar';
            document.body.appendChild(tbContainer);

            var toolbar = new mxToolbar(tbContainer);
            toolbar.enabled = false;
    
            Toolbar.addVertex(graph,toolbar,diagram,'./images/swimlane.gif', 120, 160, 'shape=swimlane;startSize=20;');
            Toolbar.addVertex(graph,toolbar,diagram,'.images/rectangle.gif', 100, 40, '');
        }
    }

    private static addVertex(graph, toolbar, diagram, icon, w, h, style){

        var cls = new Class('test','class',diagram);

        var vertex = new mxCell(cls, new mxGeometry(0, 0, w, h), style);
		vertex.setVertex(true);
				
		Toolbar.addToolbarItem(graph, toolbar, vertex, icon);
    }

    private static addToolbarItem(graph, toolbar, prototype, image)
    {
        // Function that is executed when the image is dropped on
        // the graph. The cell argument points to the cell under
        // the mousepointer if there is one.
        var funct = function(graph, evt, cell)
        {
            graph.stopEditing(false);
            console.log(prototype);
            
            var pt = graph.getPointForEvent(evt);
            var vertex = graph.getModel().cloneCell(prototype);
            vertex.geometry.x = pt.x;
            vertex.geometry.y = pt.y;
            
            graph.setSelectionCells(graph.importCells([vertex], 0, 0, cell));
        }

        // Creates the image which is used as the drag icon (preview)
        var img = toolbar.addMode(null, image, funct);
        mxUtils.makeDraggable(img, graph, funct);
    }
}