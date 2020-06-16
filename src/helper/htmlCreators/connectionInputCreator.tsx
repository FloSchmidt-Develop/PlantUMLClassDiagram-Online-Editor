import IConnection from "../../interfaces/connection";
import IConnector, { Lines, Arrows } from "../../interfaces/connector";

export default class ConnectionInputCreator{
  graph: any;

  constructor(graph: any) {
    this.graph = graph;
  }

  public createTypeSeclectDiv(
    selectedConnection: IConnection,
    sender: any
  ): HTMLTableRowElement[] {


    //TODO Check IClass for undefined !! 
    let tr1 = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let p_line_type = document.createElement("p");

    p_line_type.innerText = "Line Type: ";
    td1.appendChild(p_line_type);

    let select_line = document.createElement("select");
    select_line.id = "line-select";
    select_line.style.width = "200px";

    let option_normal = document.createElement("option");
    option_normal.value = "normal";
    let normal_text = document.createTextNode("..");
    option_normal.appendChild(normal_text);

    let option_dotted = document.createElement("option");
    option_dotted.value = "dotted";
    let dotted_text = document.createTextNode("--");
    option_dotted.appendChild(dotted_text);

    select_line.appendChild(option_normal);
    select_line.appendChild(option_dotted);

    select_line.selectedIndex =
    selectedConnection.connector.lineStyle === Lines.dotted
        ? 0
        : selectedConnection.connector.lineStyle === Lines.normal
        ? 1
        : 0;

        select_line.onchange = () => {
      var classToChange = selectedConnection;

      console.log(classToChange);
            

      if (classToChange !== null) {
        if (select_line.selectedIndex === 1 )
          classToChange.connector.setLineStyle_direct(Lines.normal);
        else if(select_line.selectedIndex === 0)
          classToChange.connector.setLineStyle_direct(Lines.dotted);
      }



      this.graph.getModel().beginUpdate();

      this.graph.model.setValue(sender.cells[0], classToChange);
      console.log(this.getUpdatedCellStyle(classToChange));
      
      this.graph.model.setStyle(sender.cells[0], this.getUpdatedCellStyle(classToChange));

      this.graph.getModel().endUpdate();
    };

    td2.appendChild(select_line);
    tr1.appendChild(td1);
    tr1.appendChild(td2);

    //Start Arrow
        let tr2 = document.createElement("tr");
        let td2_1 = document.createElement("td");
        let td2_2 = document.createElement("td");
        let p_startArrow_type = document.createElement("p");
    
        p_startArrow_type.innerText = "Start Arrow: ";
        td2_1.appendChild(p_startArrow_type);
    
        let select_startArrow = document.createElement("select");
        select_startArrow.id = "startArrow-select";
        select_startArrow.style.width = "200px";
    
        let startArrow_option_normal = document.createElement("option");
        startArrow_option_normal.value = "normal-1";
        let startArrow_option_normal_text = document.createTextNode("<-");
        startArrow_option_normal.appendChild(startArrow_option_normal_text);
    
        let startArrow_option_diamond = document.createElement("option");
        startArrow_option_diamond.value = "diamond";
        let startArrow_option_diamond_text = document.createTextNode("o-");
        startArrow_option_diamond.appendChild(startArrow_option_diamond_text);

        let startArrow_option_diamond_filled = document.createElement("option");
        startArrow_option_diamond_filled.value = "diamond_filled";
        let startArrow_option_diamond_filled_text = document.createTextNode("*-");
        startArrow_option_diamond_filled.appendChild(startArrow_option_diamond_filled_text);

        let startArrow_option_big = document.createElement("option");
        startArrow_option_big.value = "diamond";
        let startArrow_option_big_text = document.createTextNode("<|-");
        startArrow_option_big.appendChild(startArrow_option_big_text);

        let startArrow_option_none = document.createElement("option");
        startArrow_option_none.value = "none";
        let startArrow_option_none_text = document.createTextNode("-");
        startArrow_option_none.appendChild(startArrow_option_none_text);
    
        select_startArrow.appendChild(startArrow_option_normal);
        select_startArrow.appendChild(startArrow_option_diamond);
        select_startArrow.appendChild(startArrow_option_diamond_filled);
        select_startArrow.appendChild(startArrow_option_big);
        select_startArrow.appendChild(startArrow_option_none);
    
        select_startArrow.selectedIndex =
        selectedConnection.connector.startArrowSymbol === Arrows.big
            ? 3
            : selectedConnection.connector.startArrowSymbol === Arrows.diamond
            ? 1
            : selectedConnection.connector.startArrowSymbol === Arrows.diamondFilled
            ? 2
            : selectedConnection.connector.startArrowSymbol === Arrows.normal
            ? 0
            : selectedConnection.connector.startArrowSymbol === Arrows.none
            ? 4 : 0;
    
            select_startArrow.onchange = () => {
          var classToChange = selectedConnection;

          console.log('--change Start arrow---');
          
    
          if (classToChange !== null) {
            switch(select_startArrow.selectedIndex){
              case 0:
                classToChange.connector.setStartConnector_direct(Arrows.normal);
                break;
              case 1:
                classToChange.connector.setStartConnector_direct(Arrows.diamond);
                break;
              case 2:
                classToChange.connector.setStartConnector_direct(Arrows.diamondFilled);
                break;
              case 3:
                classToChange.connector.setStartConnector_direct(Arrows.big);
                break;
              case 4:
                classToChange.connector.setStartConnector_direct(Arrows.none);
                break;
              default:
                classToChange.connector.setStartConnector_direct(Arrows.none);
                break;
            }
          }

          this.graph.getModel().beginUpdate();
    
          this.graph.model.setValue(sender.cells[0], classToChange);
          console.log(this.getUpdatedCellStyle(classToChange));
          
          this.graph.model.setStyle(sender.cells[0], this.getUpdatedCellStyle(classToChange));
    
          this.graph.getModel().endUpdate();
        };
    
        td2_2.appendChild(select_startArrow);
        tr2.appendChild(td2_1);
        tr2.appendChild(td2_2);


      //end Arrow
        let tr3 = document.createElement("tr");
        let td3_1 = document.createElement("td");
        let td3_2 = document.createElement("td");
        let p_endArrow_type = document.createElement("p");
    
        p_endArrow_type.innerText = "End Arrow: ";
        td3_1.appendChild(p_endArrow_type);
    
        let select_EndArrow = document.createElement("select");
        select_EndArrow.id = "endArrow-select";
        select_EndArrow.style.width = "200px";
    
        let endArrow_option_normal = document.createElement("option");
        endArrow_option_normal.value = "normal";
        let endArrow_option_normal_text = document.createTextNode("<-");
        endArrow_option_normal.appendChild(endArrow_option_normal_text);
    
        let endArrow_option_diamond = document.createElement("option");
        endArrow_option_diamond.value = "diamond";
        let endArrow_option_diamond_text = document.createTextNode("o-");
        endArrow_option_diamond.appendChild(endArrow_option_diamond_text);

        let endArrow_option_diamond_filled = document.createElement("option");
        endArrow_option_diamond_filled.value = "diamond_filled";
        let endArrow_option_diamond_filled_text = document.createTextNode("*-");
        endArrow_option_diamond_filled.appendChild(endArrow_option_diamond_filled_text);

        let endArrow_option_big = document.createElement("option");
        endArrow_option_big.value = "diamond";
        let endArrow_option_big_text = document.createTextNode("<|-");
        endArrow_option_big.appendChild(endArrow_option_big_text);

        let endArrow_option_none = document.createElement("option");
        endArrow_option_none.value = "none";
        let endArrow_option_none_text = document.createTextNode("-");
        endArrow_option_none.appendChild(endArrow_option_none_text);
    
        select_EndArrow.appendChild(endArrow_option_normal);
        select_EndArrow.appendChild(endArrow_option_diamond);
        select_EndArrow.appendChild(endArrow_option_diamond_filled);
        select_EndArrow.appendChild(endArrow_option_big);
        select_EndArrow.appendChild(endArrow_option_none);
    
        select_EndArrow.selectedIndex =
        selectedConnection.connector.endArrowSymbol === Arrows.big
            ? 3
            : selectedConnection.connector.endArrowSymbol === Arrows.diamond
            ? 1
            : selectedConnection.connector.endArrowSymbol === Arrows.diamondFilled
            ? 2
            : selectedConnection.connector.endArrowSymbol === Arrows.normal
            ? 0
            : selectedConnection.connector.endArrowSymbol === Arrows.none
            ? 4 : 0;
    
            select_EndArrow.onchange = () => {
          var classToChange = selectedConnection;
    
          if (classToChange !== null) {
            switch(select_EndArrow.selectedIndex){
              case 0:
                classToChange.connector.setEndConnector_direct(Arrows.normal);
                break;
              case 1:
                classToChange.connector.setEndConnector_direct(Arrows.diamond);
                break;
              case 2:
                classToChange.connector.setEndConnector_direct(Arrows.diamondFilled);
                break;
              case 3:
                classToChange.connector.setEndConnector_direct(Arrows.big);
                break;
              case 4:
                classToChange.connector.setEndConnector_direct(Arrows.none);
                break;
              default:
                classToChange.connector.setEndConnector_direct(Arrows.none);
                break;
            }
          }

          this.graph.getModel().beginUpdate();
    
          this.graph.model.setValue(sender.cells[0], classToChange);
          
          this.graph.model.setStyle(sender.cells[0], this.getUpdatedCellStyle(classToChange));
    
          this.graph.getModel().endUpdate();
        };
    
        td3_2.appendChild(select_EndArrow);
        tr3.appendChild(td3_1);
        tr3.appendChild(td3_2);


    return [tr1, tr2, tr3];
  }
 


  private getUpdatedCellStyle(classToChange: IConnection): string{
    return this.getLineStyle(classToChange.connector) +
    this.getStartArrowStyle(classToChange.connector) +
    this.getEndArrowStyle(classToChange.connector) +
    "sourcePerimeterSpacing=0;shape=link;edgeStyle=orthogonalEdgeStyle;";
  }

  private getLineStyle(connector: IConnector): string {
    if (connector.lineStyle === Lines.dotted) {
      return "dashed=1;";
    }
    return "dashed=0;";
  }

  private getStartArrowStyle(connector: IConnector): string {
    if (connector.startArrowSymbol === Arrows.diamond) {
      return "startArrow=diamond;startFill=0;";
    } else if (connector.startArrowSymbol === Arrows.big) {
      return "startArrow=block;startFill=0;startSize=20;";
    } else if (connector.startArrowSymbol === Arrows.diamondFilled) {
      return "startArrow=diamond;startFill=1;";
    } else if (connector.startArrowSymbol === Arrows.normal) {
      return "startArrow=classic;startFill=1;";
    }
    return "startArrow=dash;";
  }

  private getEndArrowStyle(connector: IConnector): string {
    if (connector.endArrowSymbol === Arrows.diamond) {
      return "endArrow=diamond;endFill=0;";
    } else if (connector.endArrowSymbol === Arrows.big) {
      return "endArrow=block;endFill=0;endSize=20;";
    } else if (connector.endArrowSymbol === Arrows.diamondFilled) {
      return "endArrow=diamond;endFill=1;";
    } else if (connector.endArrowSymbol === Arrows.normal) {
      return "endArrow=classic;endFill=1;";
    }
    return "endArrow=dash;";
  }


}
