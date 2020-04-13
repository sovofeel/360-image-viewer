const { app, BrowserWindow } = require('electron');

app.on('ready', function(){

    let  win = new BrowserWindow({ width: 1280, height: 720 });

    win.loadFile('index.html')

});