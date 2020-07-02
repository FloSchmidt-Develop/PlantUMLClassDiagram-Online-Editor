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
import IDiagram from "../../../interfaces/diagram";
import ClassImg from "../../../images/ToolbarClass.png";
import InterfaceImg from "../../../images/ToolbarInterface.png";
import AbstractImg from "../../../images/ToolbarAbstract.png";
import ObjectImg from "../../../images/ToolbarObject.png";
import PackageImg from "../../../images/ToolbarPackage.png";




export default class Toolbar{

    private static diagram: IDiagram;

    public static getCreateToolbarContainer(graph: any, diagramToAddClasses: IDiagram){
        Toolbar.diagram = diagramToAddClasses;

        var tbContainer = document.getElementById('toolbar');
        if(tbContainer === null){
            tbContainer = document.createElement('div');
            tbContainer.className = 'toolbar';
            tbContainer.id = 'toolbar';
            document.body.appendChild(tbContainer);

            var toolbar = new mxToolbar(tbContainer);
            toolbar.enabled = false;

            var cls = new Class('new Class','class');
            var itf = new Class('new Interface','interface');
            var abs = new Class('new Class', 'abstractclass');
            var obj = new Class('new Object', 'object');
            var pkg = new Package('new Package');
    
            Toolbar.addVertex(graph,toolbar,pkg, PackageImg, 250, 100, 'shape=swimlane;startSize=20;');
            Toolbar.addVertex(graph,toolbar,cls, ClassImg, 250, 100, '');
            Toolbar.addVertex(graph,toolbar,itf, InterfaceImg, 270, 100, '');
            Toolbar.addVertex(graph,toolbar,obj, ObjectImg, 250, 80, '');
            Toolbar.addVertex(graph,toolbar,abs, AbstractImg, 250, 100, '');
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

            if(vertex.value.type === 'class'){
                vertex.value = new Class('Class Name','class');
                Toolbar.diagram.addClass(vertex.value);
            }
            if(vertex.value.type === 'interface'){
                vertex.value = new Class('Interface Name','interface');
                Toolbar.diagram.addClass(vertex.value);
            }
            if(vertex.value.type === 'abstractclass'){
                vertex.value = new Class('Class Name','abstractclass');
                Toolbar.diagram.addClass(vertex.value);
            }
            if(vertex.value.type === 'object'){
                vertex.value = new Class('Object Name','object');
                Toolbar.diagram.addClass(vertex.value);
            }
            else if(vertex.value instanceof Package){
                Toolbar.diagram.addPackage(vertex.value.name);
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