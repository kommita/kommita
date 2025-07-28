import { app, BrowserWindow } from 'electron';
import path from 'node:path';
import { filesystemConfig } from '../../config';

export async function createWindow() {
    const mainWindow = new BrowserWindow({
        height: 600,
        width: 800,
        webPreferences: {
            preload: path.join(filesystemConfig.rootDir, 'preload.js'),
        },
    });

    // and load the index.html of the app.
    if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
        await mainWindow.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL);
    } else {
        await mainWindow.loadFile(path.join(filesystemConfig.rootDir, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`));
    }

    // Open the DevTools.
    mainWindow.webContents.openDevTools();
}

export function quit() {
    if (process.platform !== 'darwin') app.quit();
}

export async function reCreateWindow() {
    if (BrowserWindow.getAllWindows().length === 0) await createWindow();
}
