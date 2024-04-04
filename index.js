const { app, BrowserWindow ,Menu} = require('electron');
const path = require('path');

const fs = require("fs");

if (require('electron-squirrel-startup')) {
  app.quit();
}
let mainWindow;
const createWindow = async() => {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    // autoHideMenuBar:true,
    minWidth :300,
    minHeight:300,
    useContentSize:true,
    webPreferences: {
      devTools:true,
      nodeIntegration:true,
    },
  });
  await mainWindow.loadFile(path.join(__dirname, "./src/main/main.html"));
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', async() => {
  if (BrowserWindow.getAllWindows().length === 0) {
    await createWindow();
  }
});
const mainMenu = [
  {label: '再起動',role:"reload"},
  {label: 'DevTool', role:"toggleDevTools"},
];

const menu = Menu.buildFromTemplate(mainMenu);
Menu.setApplicationMenu(menu);
