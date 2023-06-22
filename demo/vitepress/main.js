const {app, BrowserWindow} = require('electron');
const serve = require('electron-serve');

const loadURL = serve({directory: 'docs/.vitepress/dist'});

let mainWindow;

(async () => {
	await app.whenReady();

	mainWindow = new BrowserWindow();
    //mainWindow.webContents.openDevTools()

	await loadURL(mainWindow);

	// The above is equivalent to this:
	// await mainWindow.loadURL('app://localhost');
	// The `-` is just the required hostname
})();
