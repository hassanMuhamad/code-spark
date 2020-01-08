const ipc = require('electron').ipcRenderer
const globalWindowConfiguration = require('../view/config/globalWindow.config')
const fs = require('fs')
const path = require('path')
let currentWindowSetting = globalWindowConfiguration
const launchBtn = document.getElementById('launchBtn')

// handler initial page 
if (document.getElementById('intial-interface'))
{
// launch button click handler
launchBtn.addEventListener('click', function () {
  currentWindowSetting.width = 700
  currentWindowSetting.height = 700
  document.getElementById('intial-interface').style.display = ""
  const launchPermission = ipc.sendSync('launchPermission', currentWindowSetting)
})

var isActivated = false // indicated either the dark mode is on or not.
const themeCheckBox = document.getElementById('checklabel')
const themeCheckBoxStatus = document.getElementById('checklabelstat')
themeCheckBox.addEventListener('click', function() {
  if (isActivated)
  {
    themeCheckBox.classList.remove('themeSelected')
    themeCheckBoxStatus.innerHTML = "desactivated"
    isActivated = false
    fs.writeFile(path.join(__dirname, 'config/editor.config'), "vs-white", (err) => {
      if (err) console.log(err)
    })
  }
  else
  {
    themeCheckBox.classList.add('themeSelected')
    themeCheckBoxStatus.innerHTML = "activated"
    isActivated = true
    fs.writeFile(path.join(__dirname, 'config/editor.config'), "vs-dark", (err) => {
      if (err) console.log(err)
    })
    }
  })  

}
