
import path from 'path';
import { fileURLToPath } from 'url';
let __filename = fileURLToPath(import.meta.url);
let __dirname = path.dirname(__filename);
import {BrowserWindow, app, session } from 'electron'
// Use relative path to avoid issues


// Remove electron security warnings only in development mode
// Read more on https://www.electronjs.org/docs/latest/tutorial/securit
process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = 'true'



// Set application name for Windows 10+ notifications
if (process.platform === 'win32')
  app.setAppUserModelId(app.getName())

if (!app.requestSingleInstanceLock()) {
  app.quit()
  process.exit(0)
}

let win: any = null

// const preload = path.join(__dirname, 'preload.js')
// const distPath = path.join(__dirname, '../.output/public')


async function createWindow() {
  win = new BrowserWindow({
    webPreferences: {
      // Warning: Enabling nodeIntegration and disabling contextIsolation is not secure in production
      // Consider using contextBridge.exposeInMainWorld
      // Read more on https://www.electronjs.org/docs/latest/tutorial/context-isolation
      nodeIntegration: true,
      contextIsolation: true,
    },
  })
  
  try {
    if (process.env.VITE_DEV_SERVER_URL) {
      win.loadURL(process.env.VITE_DEV_SERVER_URL)
      win.webContents.openDevTools()
    }
    else {
      // win.loadFile(path.join(__dirname, '../.output/public/index.html'))
      win.loadFile(path.join(__dirname, '../.output', 'public', 'index.html'))
    }
  } catch (error) {
    
  }

  const cookie = { url: 'file://', name: 'dummy_name', value: 'dummy' }
session.defaultSession.cookies.set(cookie)
  .then(() => {
    console.log(cookie)
    // success
  }, (error) => {
    console.error(error)
  })

}

app.on('window-all-closed', () => {
  win = null
  if (process.platform !== 'darwin')
    app.quit()
})

app.on('second-instance', () => {
  if (win) {
    // Focus on the main window if the user tried to open another
    if (win.isMinimized())
      win.restore()
    win.focus()
  }
})

app.on('activate', () => {
  const allWindows = BrowserWindow.getAllWindows()
  if (allWindows.length)
    allWindows[0].focus()

  else
    createWindow()
})

app.whenReady().then(() => {

  createWindow()
})