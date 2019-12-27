const ipc = require('electron').ipcRenderer
const loader = require('monaco-loader')
const fs = require('fs')
const path = require('path')
 
 
let themeIsDark
 
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
 
const fileClass = document.getElementsByClassName('file')[0]
const directoryClass = document.getElementsByClassName('directory')[0]
const runClass = document.getElementsByClassName('run')[0]
const gitClass = document.getElementsByClassName('git')[0]
const uploadClass = document.getElementsByClassName('upload')[0]
const downloadClass = document.getElementsByClassName('download')[0]
 
file.addEventListener('click', () => {
  fileClass.style.display = 'block'
  directoryClass.style.display = 'none'
  runClass.style.display = 'none'
  gitClass.style.display = 'none'
  uploadClass.style.display = 'none'
  downloadClass.style.display = 'none'
  file.classList.add('is-active')
})
 
directory.addEventListener('click', () => {
  fileClass.style.display = 'none'
  directoryClass.style.display = 'block'
  runClass.style.display = 'none'
  gitClass.style.display = 'none'
  uploadClass.style.display = 'none'
  downloadClass.style.display = 'none'
  directory.classList.add('is-active')
})
 
run.addEventListener('click', () => {
  fileClass.style.display = 'none'
  directoryClass.style.display = 'none'
  runClass.style.display = 'block'
  gitClass.style.display = 'none'
  uploadClass.style.display = 'none'
  downloadClass.style.display = 'none'
  run.classList.add('is-active')
})
 
git.addEventListener('click', () => {
  fileClass.style.display = 'none'
  directoryClass.style.display = 'none'
  runClass.style.display = 'none'
  gitClass.style.display = 'block'
  uploadClass.style.display = 'none'
  downloadClass.style.display = 'none'
  git.classList.add('is-active')
})
 
upload.addEventListener('click', () => {
  fileClass.style.display = 'none'
  directoryClass.style.display = 'none'
  runClass.style.display = 'none'
  gitClass.style.display = 'none'
  uploadClass.style.display = 'block'
  downloadClass.style.display = 'none'
  upload.classList.add('is-active')
})
 
download.addEventListener('click', () => {
  fileClass.style.display = 'none'
  directoryClass.style.display = 'none'
  runClass.style.display = 'none'
  gitClass.style.display = 'none'
  uploadClass.style.display = 'none'
  downloadClass.style.display = 'block'
  download.classList.add('is-active')
})

