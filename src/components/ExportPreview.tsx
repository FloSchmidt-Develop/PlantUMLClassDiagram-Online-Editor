import React from 'react';

import { withStyles, ThemeProvider } from '@material-ui/core/styles';


import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import DiagramCreator from '../helper/diagramCreator';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';

import axios from "axios";
import { Link, Paper } from '@material-ui/core';

axios.defaults.baseURL = "http://localhost:4000";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = ((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography {...other} style={{margin: 0}}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" onClick={onClose} style={{position: 'absolute', top: '5px', right: '5px'}}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function ExportPreviewDialog() {
  const [open, setOpen] = React.useState(false);
  const [shownText, setShownText] = React.useState('');
  const [link, setLink] = React.useState('');
  const [isVisible, setIsVisible] = React.useState(false);

  function replacer(key,value)
  {
      if (key=="vertex") return undefined;
      else return value;
  }

  const handleClickOpen = async () => {
    var jsonObj = JSON.stringify(DiagramCreator.diagram[DiagramCreator.activeIndex],replacer);
    var obj = JSON.parse(jsonObj);
    
    const res = await axios.post("/export",obj);
    if(isVisible){
      const linkContainer = await axios.post("/png",obj);
      setLink(linkContainer.data);
    }

    setShownText(res.data)
    setOpen(true);
  };

  const downloadTxtFile = () => {
    let content = shownText
    const element = document.createElement("a");
    const file = new Blob([content], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = DiagramCreator.diagram[DiagramCreator.activeIndex].name + '.puml';
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  }

  const showPreview = async () => {
    setIsVisible(!isVisible);
    if(!isVisible){
      var jsonObj = JSON.stringify(DiagramCreator.diagram[DiagramCreator.activeIndex],replacer);
      var obj = JSON.parse(jsonObj);
      const linkContainer = await axios.post("/png",obj);
      setLink(linkContainer.data);
    }
  }

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button startIcon={<CloudDownloadIcon/>} variant="contained" color="primary" onClick={handleClickOpen}>
        Export File
      </Button>
      <Dialog onClose={handleClose} fullWidth={true} maxWidth={"lg"} aria-labelledby="customized-dialog-title" open={open}  >
        <DialogTitle id="customized-dialog-title" onClose={handleClose} >
          Export Preview
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom style={{whiteSpace: 'pre-line'}}>
            {shownText}
          </Typography>
          <Button id='showButton' variant="contained" color="primary" onClick={showPreview}>{!isVisible ? 'Show Diagram Preview' : 'Hide Diagram Preview'}</Button>
          <label htmlFor='showButton'>This will send your Diagram to PlantUML Server</label>
          <div hidden={!isVisible}>
            <Paper>
            <img 
          src={link}
          alt={link}
          />
            </Paper>

          <Typography>
            This Link will lead you to the Image
          </Typography>
          <Typography>
          <a href={link} target="_blank">{link} </a>
          </Typography>

          </div>
        </DialogContent>
        <DialogActions>
          <Button autoFocus variant="contained" color="secondary" onClick={downloadTxtFile}>
            Save on Disk
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}