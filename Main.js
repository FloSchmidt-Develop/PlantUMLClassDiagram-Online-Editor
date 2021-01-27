const {app, BrowserWindow} = require('electron');

function createWindow () {
let win = new BrowserWindow({width: 1800, height: 1200})

// and load the index.html of the app.
win.loadURL('http://localhost:3000/')
}

app.on('ready', createWindow);
