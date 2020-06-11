import IConnection from "../../interfaces/connection";

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
    selectedConnection.connector.includes('.')
        ? 0
        : selectedConnection.connector.includes('-')
        ? 1
        : 0;

        select_line.onchange = () => {
      var classToChange = selectedConnection;

      console.log(classToChange);
            

      if (classToChange !== null) {
        while (classToChange.connector.includes(select_line.selectedIndex === 0 ? '-' : '.')) {
            classToChange.setConnector(classToChange.connector.replace(
                select_line.selectedIndex === 0 ? '-' : '.'
                ,select_line.selectedIndex === 0 ? '.' : '-')
            );
        }
      }

      console.log(classToChange);

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
        //TODO Check IClass for undefined !! 
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
        startArrow_option_normal.value = "normal";
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
        select_startArrow.appendChild(startArrow_option_big);
    
        select_startArrow.selectedIndex =
        selectedConnection.connector.startsWith('<|')
            ? 3
            : selectedConnection.connector.startsWith('o')
            ? 1
            : selectedConnection.connector.startsWith('*')
            ? 2
            : selectedConnection.connector.startsWith('<')
            ? 0
            : selectedConnection.connector.startsWith('-')
            ? 4 : 0;
    
            select_startArrow.onchange = () => {
          var classToChange = selectedConnection;
    
          console.log(classToChange);
                
    
          if (classToChange !== null) {
            while (classToChange.connector.includes(select_startArrow.selectedIndex === 0 ? '-' : '.')) {
                classToChange.setConnector(classToChange.connector.replace(
                    select_startArrow.selectedIndex === 0 ? '-' : '.'
                    ,select_startArrow.selectedIndex === 0 ? '.' : '-')
                );
            }
          }
    
          console.log(classToChange);
    
          this.graph.getModel().beginUpdate();
    
          this.graph.model.setValue(sender.cells[0], classToChange);
          console.log(this.getUpdatedCellStyle(classToChange));
          
          this.graph.model.setStyle(sender.cells[0], this.getUpdatedCellStyle(classToChange));
    
          this.graph.getModel().endUpdate();
        };
    
        td2_2.appendChild(select_startArrow);
        tr2.appendChild(td2_1);
        tr2.appendChild(td2_2);


    return [tr1, tr2];
  }


  private getUpdatedCellStyle(classToChange: IConnection): string{
    return this.getLineStyle(classToChange.connector) +
    this.getStartArrowStyle(classToChange.connector) +
    "endArrow=dash;sourcePerimeterSpacing=0;shape=link;edgeStyle=orthogonalEdgeStyle;";
  }

  private getLineStyle(connector: string): string {
    if (connector.includes(".")) {
      return "dashed=1;";
    }
    return "dashed=0;";
  }

  private getStartArrowStyle(connector: string): string {
    if (connector.indexOf("o") === 0) {
      return "startArrow=diamond;startFill=0;";
    } else if (connector.indexOf("<|") === 0) {
      return "startArrow=block;startFill=0;startSize=20;";
    } else if (connector.indexOf("*") === 0) {
      return "startArrow=diamond;startFill=1;";
    } else if (connector.indexOf("<") === 0) {
      return "startArrow=classic;startFill=1;";
    }
    return "startArrow=dash;";
  }


}
