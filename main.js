const { app, BrowserWindow, Menu} = require('electron/main')
const {sequelize} = require('./models')
const postControllers = require('./controllers/postControllers')
const path = require('node:path')

const isWindows = process.platform === 'win32';


function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: false,
      nodeIntegration: true,
    }
  })
  const mainMenu = Menu.buildFromTemplate(menu)
  Menu.setApplicationMenu(mainMenu)

  win.loadFile('index.html')

  sequelize.sync().then(()=>{
    console.log('connection synced')
  })
  postControllers.newPost()
}


function createAnalyticsWindow () {
  const Awin = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      // preload: path.join(__dirname, 'preload.js'),
      contextIsolation: false,
      nodeIntegration: true,
    }
  })

  Awin.loadFile('analytics.html')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})




// ____________________ Menu ________________________________

const menu = [
  ...(process.platform === 'darwin' 
      ? [
          {
              label: app.name(),
              submenu: [
                  {
                      label: 'Analytics',
                      click: createAnalyticsWindow
                  },
              ],
          },
      ]
   : []),
   {
      label: 'File',
      submenu: [
          {
              label: 'Save',
              accelerator: 'CmdOrCtrl+S',
              click() { mainWin.webContents.send('save-clicked')}
          },
          {
              label: 'Save As',
              accelerator: 'CmdOrCtrl+Shift+S',
              click() {
                  filePath = undefined
                  mainWin.webContents.send('save-clicked')
              }
          },
      ]
   },
   {role: "editMenu"},
   {role: "viewMenu"},
  ...(isWindows ? [{
      label: 'Window',
      submenu: [{
          label: 'Analytics',
          click: createAnalyticsWindow
      }]
  }] : [])
];