const ipc = require('electron').ipcRenderer
const loader = require('monaco-loader')
const fs = require('fs')
const path = require('path')
 
 
let themeIsDark // indecate Dark theme is on or not 
 
try
{
  var data = fs.readFileSync(path.join(__dirname, 'config/editor.config'), 'utf8')
  if (data == 'vs-dark') themeIsDark = data
  else themeIsDark = 'vs-white'
}
catch (e)
{
  console.log('Error:', e.stack)
}
 
const editorDiv = document.getElementById('editor')
 
loader().then((monaco) => {
  editor = monaco.editor.create(editorDiv, {
    language: 'javascript',
    theme: themeIsDark,
    automaticLayout: true
  })
})
 
const file = document.getElementById('file')
const directory = document.getElementById('directory')
const run = document.getElementById('run')
const git = document.getElementById('git')
const upload = document.getElementById('upload')
const download = document.getElementById('download')
 
const fileClass = document.getElementsByClassName('file')
const directoryClass = document.getElementsByClassName('directory')
const runClass = document.getElementsByClassName('run')
const gitClass = document.getElementsByClassName('git')
const uploadClass = document.getElementsByClassName('upload')
const downloadClass = document.getElementsByClassName('download')
 
function setAllOff ()
{
  file.classList.remove('is-active')
  directory.classList.remove('is-active')
  run.classList.remove('is-active')
  git.classList.remove('is-active')
  upload.classList.remove('is-active')
  download.classList.remove('is-active')
}


file.addEventListener('click', () => {
  fileClass[0].style.display = 'block'
  directoryClass[0].style.display = 'none'
  runClass[0].style.display = 'none'
  gitClass[0].style.display = 'none'
  uploadClass[0].style.display = 'none'
  downloadClass[0].style.display = 'none'
  setAllOff()
  file.classList.add('is-active')
})
 
directory.addEventListener('click', () => {
  fileClass[0].style.display = 'none'
  directoryClass[0].style.display = 'block'
  runClass[0].style.display = 'none'
  gitClass[0].style.display = 'none'
  uploadClass[0].style.display = 'none'
  downloadClass[0].style.display = 'none'
  
  setAllOff()
  directory.classList.add('is-active')
})
 
run.addEventListener('click', () => {
  fileClass[0].style.display = 'none'
  directoryClass[0].style.display = 'none'
  runClass[0].style.display = 'block'
  gitClass[0].style.display = 'none'
  uploadClass[0].style.display = 'none'
  downloadClass[0].style.display = 'none'
  
  setAllOff()
  run.classList.add('is-active')
})
 
git.addEventListener('click', () => {
  fileClass[0].style.display = 'none'
  directoryClass[0].style.display = 'none'
  runClass[0].style.display = 'none'
  gitClass[0].style.display = 'block'
  uploadClass[0].style.display = 'none'
  downloadClass[0].style.display = 'none'
  setAllOff()
  git.classList.add('is-active')
})
 
upload.addEventListener('click', () => {
  fileClass[0].style.display = 'none'
  directoryClass[0].style.display = 'none'
  runClass[0].style.display = 'none'
  gitClass[0].style.display = 'none'
  uploadClass[0].style.display = 'block'
  downloadClass[0].style.display = 'none'
  setAllOff()
  upload.classList.add('is-active')
})
 
download.addEventListener('click', () => {
  fileClass[0].style.display = 'none'
  directoryClass[0].style.display = 'none'
  runClass[0].style.display = 'none'
  gitClass[0].style.display = 'none'
  uploadClass[0].style.display = 'none'
  downloadClass[0].style.display = 'block'
  setAllOff()
  download.classList.add('is-active')
})

