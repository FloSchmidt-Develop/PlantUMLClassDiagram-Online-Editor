import React, { Fragment, useState, useEffect } from "react";
import PropTypes from 'prop-types';
import ReactDOM from "react-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import "./App.css";
import Editor from "./Editor";
import DiagramCreator from "./helper/diagramCreator";
import { Button, Toolbar } from "@material-ui/core";
import { brotliDecompress } from "zlib";


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
    
    //setDiagrams(temp);
  }

  return (
     <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          {diagrams.map( (number) =>   
            <Tab label={DiagramCreator.diagram[number]?.name != null ? DiagramCreator.diagram[number]?.name : 'new Diagram' } {...a11yProps(number)} />
          )};
          <Button className={classes.button} onClick={addDiagram}>+</Button>
        </Tabs>
      </AppBar>
      {diagrams.map((number) => 
        <TabPanel value={value} index={number}>
          <Editor index={number}/>
        </TabPanel>
      )}
    </div>
  )

};



export default App;
