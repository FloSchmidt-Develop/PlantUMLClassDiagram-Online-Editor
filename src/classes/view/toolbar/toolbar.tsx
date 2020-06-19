import {
    mxToolbar,
    mxCell,
    mxGeometry,
    mxUtils
  } from "mxgraph-js";
import Class from "../../parserRep/class";
import Diagram from "../../parserRep/diagram";
import IPackage from "../../../interfaces/package";
import IClass from "../../../interfaces/class";
import Package from "../../parserRep/package";




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

            var cls = new Class('new Class','class',diagram);
            var pkg = new Package('new Package');
    
            Toolbar.addVertex(graph,toolbar,pkg,'../../../images/swimlane.gif', 120, 160, 'shape=swimlane;startSize=20;');
            Toolbar.addVertex(graph,toolbar,cls,'../../../images/rectangle.gif', 100, 40, '');
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
            console.log(prototype);
            
            var pt = graph.getPointForEvent(evt);
            var vertex = graph.getModel().cloneCell(prototype);

            //TODO need to create a new Class for vertex value otherwise it will always create last imported Class
            //console.log(vertex);
            //vertex.value = bestCopyEver(prototype.value);
            
            
            vertex.geometry.x = pt.x;
            vertex.geometry.y = pt.y;
            
            graph.setSelectionCells(graph.importCells([vertex], 0, 0, cell));
        }

        function bestCopyEver(src) {
            return Object.assign({}, src);
          }

        // Creates the image which is used as the drag icon (preview)
        var img = toolbar.addMode(null, image, funct);
        mxUtils.makeDraggable(img, graph, funct);
    }
}