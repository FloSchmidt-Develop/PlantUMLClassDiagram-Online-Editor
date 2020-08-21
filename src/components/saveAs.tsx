import React, { Fragment, useState, useEffect } from "react";
import { saveAs } from 'file-saver';
import Button from '@material-ui/core/Button';
import DiagramCreator from "../helper/diagramCreator";

const SaveAs = () => {

    function replacer(key,value)
    {
        if (key === "vertex" || key === "observers") return undefined;
        else return value;
    }

    const save = () => {
        try{
            var isFileSaverSupported = !!new Blob;
        }
        catch(e){
            alert('your Browser do not support save')
        }
        finally{
            var blob = new Blob([JSON.stringify(DiagramCreator.diagram[DiagramCreator.activeIndex],replacer)],{type:'application/json'})
            saveAs(blob, "hello world.json");
        }
    }

    return (
        <Button variant="contained" color="primary" onClick={save} >
            Save
        </Button>
    )
}

export default SaveAs;