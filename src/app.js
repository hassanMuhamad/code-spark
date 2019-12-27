const { app, BrowserWindow } = require('electron')
const globalWindowConfiguration = require('./view/config/globalWindow.config')
const path = require('path')
const ipc = require('electron').ipcMain

// a reference to the global window
let win, editorWindow

function createWindow ()
{
  // initializing the win object
  win = new BrowserWindow (globalWindowConfiguration)

  win.setMenuBarVisibility(false)
  
  // win.webContents.toggleDevTools()

  win.loadFile(path.join(__dirname, 'view/index.html'))
}

ipc.on('launchPermission', function (event, newConfiguration) {
  // win = new BrowserWindow(newConfiguration)
  newConfiguration.frame = true
  newConfiguration.resizable = true
  editorWindow = new BrowserWindow(newConfiguration)
  editorWindow.loadFile(path.join(__dirname, 'view/editorView.html'))
  win.close()
})

app.on('ready', createWindow)
