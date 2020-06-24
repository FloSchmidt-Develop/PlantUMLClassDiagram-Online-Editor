import {
    mxToolbar,
    mxCell,
    mxGeometry,
    mxUtils
  } from "mxgraph-js";
import Class from "../../parserRep/class";
import IPackage from "../../../interfaces/package";
import IClass from "../../../interfaces/class";
import Package from "../../parserRep/package";
import Swimlane from "../../../images/swimlane.gif"
import Rectangle from "../../../images/rectangle.gif"




export default class Toolbar{

    public static getCreateToolbarContainer(graph: any){

        var tbContainer = document.getElementById('toolbar');
        if(tbContainer === null){
            tbContainer = document.createElement('div');
            tbContainer.className = 'toolbar';
            tbContainer.id = 'toolbar';
            document.body.appendChild(tbContainer);

            var toolbar = new mxToolbar(tbContainer);
            toolbar.enabled = false;

            var cls = new Class('new Class','class');
            var pkg = new Package('new Package');
    
            Toolbar.addVertex(graph,toolbar,pkg, Swimlane, 120, 160, 'shape=swimlane;startSize=20;');
            Toolbar.addVertex(graph,toolbar,cls, Rectangle, 100, 40, '');
        }
    }

    private static addVertex(graph, toolbar,type: IClass | IPackage, icon, w, h, style){

        var vertex = new mxCell(type, new mxGeometry(0, 0, w, h), style);
        
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
            
            var pt = graph.getPointForEvent(evt);
            var vertex = graph.getModel().cloneCell(prototype);

            //TODO need to create a new Class for vertex value otherwise it will always create last imported Class
            if(vertex.value instanceof Class){
                vertex.value = new Class('Class Name','class');
            }
            else if(vertex.value instanceof Package){
                vertex.value = new Package('Package Name');
            }
            
            
            
            vertex.geometry.x = pt.x;
            vertex.geometry.y = pt.y;
            
            graph.setSelectionCells(graph.importCells([vertex], 0, 0, cell));
        }


        // Creates the image which is used as the drag icon (preview)
        var img = toolbar.addMode(null, image, funct);
        mxUtils.makeDraggable(img, graph, funct);
    }
}