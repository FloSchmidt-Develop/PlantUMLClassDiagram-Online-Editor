import React, { Fragment, useState, useEffect } from "react";
import PropTypes from 'prop-types';
import ReactDOM from "react-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';

import AddCircleOutlineSharpIcon from '@material-ui/icons/AddCircleOutlineSharp';

import "./App.css";
import Editor from "./Editor";
import DiagramCreator from "./helper/diagramCreator";
import { Button, Toolbar } from "@material-ui/core";


function TabPanel(props) {
  const { children, value, index, ...other } = props;


  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  button: {
    fontWeight: 'bold',
    color: 'white'
  },
  closeButton:{
    position: "absolute",
    top: '50px',
    right: '10px'
  }
}));


function App(){
  const classes = useStyles();
  const [actualShownIndex, setActualShownIndex] = React.useState(0);
  const [diagrams, setDiagrams] = React.useState([0]);
  const [numberOfDiagrams,setNumberOfDiagrams] = React.useState(1);
  const [nameChanged, setNameChange] = React.useState(false);

  const handleChange = (event, newValue) => {
    DiagramCreator.activeIndex = newValue;
    setActualShownIndex(newValue);
  };

  const addDiagram = () => {
    let temp = [...diagrams, numberOfDiagrams];
    setDiagrams(temp);
    setNumberOfDiagrams(numberOfDiagrams + 1);
    DiagramCreator.activeIndex = numberOfDiagrams;
    setActualShownIndex(numberOfDiagrams);
    console.log(temp);
    
    
    //setDiagrams(temp);
  }

  const showNameChanging = (number) => {
    let newName = prompt('Change name of Diagram');
    if(newName != null && DiagramCreator.diagram[number] != null){
      DiagramCreator.diagram[number].name = newName;
      setNameChange(!nameChanged);
    }

    
  }

  const closeDiagram = () => {
   let closeEditorIndex = DiagramCreator.activeIndex;
   let closeEditorId = DiagramCreator.diagram[DiagramCreator.activeIndex].id;
   let diagramIndex = diagrams.indexOf(closeEditorIndex);
   diagrams.pop();
   
   let newIndex = diagrams[diagramIndex - 1];
   DiagramCreator.diagram =  DiagramCreator.diagram.filter(e => e.id !== closeEditorId);
   setDiagrams([...diagrams]);
   setNumberOfDiagrams(numberOfDiagrams - 1);
   DiagramCreator.activeIndex = newIndex;
   setActualShownIndex(newIndex);
   
    
  }

  return (
     <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={actualShownIndex} onChange={handleChange} aria-label="simple tabs example">
          {diagrams.map( (indexOfDiagram) =>   
            <Tab value={indexOfDiagram}
            key={indexOfDiagram}
            onDoubleClick={ () => showNameChanging(indexOfDiagram) }
            label={DiagramCreator.diagram[indexOfDiagram]?.name != null 
              ? DiagramCreator.diagram[indexOfDiagram]?.name : 'new Diagram' }
               {...a11yProps(indexOfDiagram)} />
          )};
          <IconButton className={classes.button} onClick={addDiagram}>
            <AddCircleOutlineSharpIcon/>
          </IconButton>
        </Tabs>
      </AppBar>
      {diagrams.map((indexOfDiagram) => 
        <TabPanel value={actualShownIndex} index={indexOfDiagram} key={indexOfDiagram}>
          <Editor index={indexOfDiagram} key={indexOfDiagram}/>
          <Button variant="contained" color="secondary" className={classes.closeButton} onClick={closeDiagram}>X</Button>
        </TabPanel>
      )}
    </div>
  )

};



export default App;
