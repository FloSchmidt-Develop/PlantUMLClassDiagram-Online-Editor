
import Connection from "../../model/connection";
import ConnectionController from "../../controller/modelController/connectionController";
import { Lines, Arrows } from "../../../interfaces/connector";

export default class ConnectionInputCreator{
  controller: ConnectionController;

  constructor(controller: ConnectionController) {
    this.controller = controller;
  }

  public createTypeSeclectDiv(selectedConnection: Connection): HTMLTableRowElement[] {

    //Line Label----------------------------------------------------------------------
    let lineLabelRow = document.createElement("tr");
    let labelLabel = document.createElement("td");
    let labelTextBoxContainer = document.createElement("td");
    let p_LabelLabel = document.createElement("p");

    p_LabelLabel.innerText = "Line Label: ";
    labelLabel.appendChild(p_LabelLabel);

    let labelInput = document.createElement("input");
    labelInput.type = "text";
    labelInput.value = selectedConnection.stereoType != null ? selectedConnection.stereoType : "<Label>";

    labelInput.onchange = () => {
      this.controller.updateLineLabel(labelInput.value);
    };

    labelTextBoxContainer.appendChild(labelInput);
    lineLabelRow.appendChild(labelLabel);
    lineLabelRow.appendChild(labelTextBoxContainer);

    //----Line Type--------------------------------------------------------
    let lineTypeRow = document.createElement("tr");
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
    let normal_text = document.createTextNode(".. dashed Line");
    option_normal.appendChild(normal_text);

    let option_dotted = document.createElement("option");
    option_dotted.value = "dotted";
    let dotted_text = document.createTextNode("-- normal Line");
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
        this.controller.updateLineStyle(select_line.selectedIndex);
    };

    td2.appendChild(select_line);
    lineTypeRow.appendChild(td1);
    lineTypeRow.appendChild(td2);

    //Start Arrow-----------------------------------------------------------
        let startArrowRow = document.createElement("tr");
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
        let startArrow_option_normal_text = document.createTextNode("<- association ");
        startArrow_option_normal.appendChild(startArrow_option_normal_text);
    
        let startArrow_option_diamond = document.createElement("option");
        startArrow_option_diamond.value = "diamond";
        let startArrow_option_diamond_text = document.createTextNode("o- aggregation");
        startArrow_option_diamond.appendChild(startArrow_option_diamond_text);

        let startArrow_option_diamond_filled = document.createElement("option");
        startArrow_option_diamond_filled.value = "diamond_filled";
        let startArrow_option_diamond_filled_text = document.createTextNode("*- composition");
        startArrow_option_diamond_filled.appendChild(startArrow_option_diamond_filled_text);

        let startArrow_option_big = document.createElement("option");
        startArrow_option_big.value = "diamond";
        let startArrow_option_big_text = document.createTextNode("<|- inheritance");
        startArrow_option_big.appendChild(startArrow_option_big_text);
        

        let startArrow_option_none = document.createElement("option");
        startArrow_option_none.value = "none";
        let startArrow_option_none_text = document.createTextNode("- none");
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
          this.controller.updateStartArrow(select_startArrow.selectedIndex);
        };
    
        td2_2.appendChild(select_startArrow);
        startArrowRow.appendChild(td2_1);
        startArrowRow.appendChild(td2_2);


      //End Arrow---------------------------------------------------------------------------
        let endArrowRow = document.createElement("tr");
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
        let endArrow_option_normal_text = document.createTextNode("<- association");
        endArrow_option_normal.appendChild(endArrow_option_normal_text);
    
        let endArrow_option_diamond = document.createElement("option");
        endArrow_option_diamond.value = "diamond";
        let endArrow_option_diamond_text = document.createTextNode("o- aggregation");
        endArrow_option_diamond.appendChild(endArrow_option_diamond_text);

        let endArrow_option_diamond_filled = document.createElement("option");
        endArrow_option_diamond_filled.value = "diamond_filled";
        let endArrow_option_diamond_filled_text = document.createTextNode("*- composition");
        endArrow_option_diamond_filled.appendChild(endArrow_option_diamond_filled_text);

        let endArrow_option_big = document.createElement("option");
        endArrow_option_big.value = "diamond";
        let endArrow_option_big_text = document.createTextNode("<|- inheritance");
        endArrow_option_big.appendChild(endArrow_option_big_text);

        let endArrow_option_none = document.createElement("option");
        endArrow_option_none.value = "none";
        let endArrow_option_none_text = document.createTextNode("- none");
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
          this.controller.updateEndArrow(select_EndArrow.selectedIndex);
        };
        

        td3_2.appendChild(select_EndArrow);
        endArrowRow.appendChild(td3_1);
        endArrowRow.appendChild(td3_2);

        //Multiplicity Start--------------------------------------------------
        let startMultiplicityRow = document.createElement("tr");
        let startMultiplicityLabel = document.createElement("td");
        let startMultiplicityTextBoxContainer = document.createElement("td");
        let p_startMultiplicity = document.createElement("p");
    
        p_startMultiplicity.innerText = "Start Multiplicity: ";
        startMultiplicityLabel.appendChild(p_startMultiplicity);
    
        let startMultiplicityInput = document.createElement("input");
        startMultiplicityInput.type = "text";
        startMultiplicityInput.value = selectedConnection.multiplicity_left.value != null ? selectedConnection.multiplicity_left.value : "";
    
        startMultiplicityInput.onchange = () => {
          this.controller.updateStartMultiplicity(startMultiplicityInput.value);
        };
    
        startMultiplicityTextBoxContainer.appendChild(startMultiplicityInput);
        startMultiplicityRow.appendChild(startMultiplicityLabel);
        startMultiplicityRow.appendChild(startMultiplicityTextBoxContainer);


        //Multiplicity End--------------------------------------------------
        let endMultiplicityRow = document.createElement("tr");
        let endMultiplicityLabel = document.createElement("td");
        let endMultiplicityTextBoxContainer = document.createElement("td");
        let p_endMultiplicity = document.createElement("p");
    
        p_endMultiplicity.innerText = "End Multiplicity: ";
        endMultiplicityLabel.appendChild(p_endMultiplicity);
    
        let endMultiplicityInput = document.createElement("input");
        endMultiplicityInput.type = "text";
        endMultiplicityInput.value = selectedConnection.multiplicity_right.value != null ? selectedConnection.multiplicity_right.value : "";
    
        endMultiplicityInput.onchange = () => {
          this.controller.updateEndMultiplicity(endMultiplicityInput.value);
        };
    
        endMultiplicityTextBoxContainer.appendChild(endMultiplicityInput);
        endMultiplicityRow.appendChild(endMultiplicityLabel);
        endMultiplicityRow.appendChild(endMultiplicityTextBoxContainer);


    return [lineLabelRow, lineTypeRow, startArrowRow, endArrowRow, startMultiplicityRow, endMultiplicityRow];
  }

}
