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
  const [value, setValue] = React.useState(0);
  const [diagrams, setDiagrams] = React.useState([0]);
  const [index,setIndex] = React.useState(1);

  const handleChange = (event, newValue) => {
    DiagramCreator.activeIndex = newValue;
    setValue(newValue);
  };

  const addDiagram = () => {
    let temp = [...diagrams, index];
    setDiagrams(temp);
    setIndex(index + 1);
    DiagramCreator.activeIndex = index;
    setValue(index);
    
    //setDiagrams(temp);
  }

  const closeDiagram = () => {
   //ToDO: need to be done
   alert('not implemented jet')
   
    
  }

  return (
     <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          {diagrams.map( (number) =>   
            <Tab value={number}
            label={DiagramCreator.diagram[number]?.name != null 
              ? DiagramCreator.diagram[number]?.name : 'new Diagram' }
               {...a11yProps(number)} />
          )};
          <IconButton className={classes.button} onClick={addDiagram}>
            <AddCircleOutlineSharpIcon/>
          </IconButton>
        </Tabs>
      </AppBar>
      {diagrams.map((number) => 
        <TabPanel value={value} index={number}>
          <Editor index={number}/>
          <Button variant="contained" color="secondary" className={classes.closeButton} onClick={closeDiagram}>X</Button>
        </TabPanel>
      )}
    </div>
  )

};



export default App;
