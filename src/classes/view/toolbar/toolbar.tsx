import {
    mxToolbar,
    mxCell,
    mxGeometry,
    mxUtils
  } from "mxgraph-js";
import Class from "../../parserRep/class";
import MyObject from "../../parserRep/object";
import IPackage from "../../../interfaces/package";
import IClass from "../../../interfaces/class";
import Package from "../../parserRep/package";
import IDiagram from "../../../interfaces/diagram";
import ClassImg from "../../../images/ToolbarClass.png";
import InterfaceImg from "../../../images/ToolbarInterface.png";
import AbstractImg from "../../../images/ToolbarAbstract.png";
import ObjectImg from "../../../images/ToolbarObject.png";
import PackageImg from "../../../images/ToolbarPackage.png";
import DiagramCreator from "../../../helper/diagramCreator";




export default class Toolbar{


    public getCreateToolbarContainer(graph: any){
            let tb = document.getElementById('toolBar');
            while (tb?.firstChild) {
                if(tb.lastChild != null)
                    tb.removeChild(tb.lastChild);
              }
            let tbContainer = document.createElement('div');
            tbContainer.className = 'toolbar';
            tbContainer.id = 'toolbar';
           tb?.appendChild(tbContainer);

            var toolbar = new mxToolbar(tbContainer);
            toolbar.enabled = false;

            var cls = new Class('new Class','class');
            var itf = new Class('new Interface','interface');
            var abs = new Class('new Class', 'abstractclass');
            var obj = new MyObject('new Object', 'object');
            var pkg = new Package('new Package');
    
            this.addVertex(graph,toolbar,pkg, PackageImg, 250, 100, 'shape=swimlane;startSize=20;');
            this.addVertex(graph,toolbar,cls, ClassImg, 250, 100, '');
            this.addVertex(graph,toolbar,itf, InterfaceImg, 270, 100, '');
            this.addVertex(graph,toolbar,obj, ObjectImg, 250, 80, '');
            this.addVertex(graph,toolbar,abs, AbstractImg, 250, 100, '');
            //toolbar.addLine();

    }

    private addVertex(graph, toolbar,type: IClass | IPackage, icon, w, h, style){

        var vertex = new mxCell(type, new mxGeometry(0, 0, w, h), style);
        
		vertex.setVertex(true);
				
        this.addToolbarItem(graph, toolbar, vertex, icon);
    }

    private addToolbarItem(graph, toolbar, prototype, image)
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
                vertex.value = new Class('NewClass','class');
                DiagramCreator.diagram[DiagramCreator.activeIndex].addClass(vertex.value);
            }
            if(vertex.value.type === 'interface'){
                vertex.value = new Class('NewInterface','interface');
                DiagramCreator.diagram[DiagramCreator.activeIndex].addClass(vertex.value);
            }
            if(vertex.value.type === 'abstractclass'){
                vertex.value = new Class('newAbstractClass','abstractclass');
                DiagramCreator.diagram[DiagramCreator.activeIndex].addClass(vertex.value);
            }
            if(vertex.value.type === 'object'){
                vertex.value = new MyObject('newObject', 'object');
                DiagramCreator.diagram[DiagramCreator.activeIndex].addClass(vertex.value);
            }
            else if(vertex.value instanceof Package){
                vertex.value = new Package('PackageName');
                DiagramCreator.diagram[DiagramCreator.activeIndex].addPackage(vertex.value);
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