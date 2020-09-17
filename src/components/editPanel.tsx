import React from 'react';
import TextField from '@material-ui/core/TextField';
import Class from '../classes/model/class';


const EditPanel = (props) => {
    let selectedClass = props?.selectedCell?.value as Class
    let graph = props.graph;


    const nameChange = (e) => {
        console.log(e);
        selectedClass.setName(e.target.value);
        
        graph.getModel().beginUpdate();
        graph.model.setValue(props?.selectedCell, selectedClass);
        graph.getModel().endUpdate();
        
    }
    
    
    return(
        selectedClass != null ? 
        <div>
            <TextField id="standard-required" label="Name" defaultValue={selectedClass.getName()} onChange={nameChange} />
        </div>
        :
        <div>
            Noting selected
        </div>
    )
}

export default EditPanel;


