import { app, BrowserWindow } from 'electron';
import path from 'node:path';
import { appEnv, mainWindowConfig } from '../../config/AppConfig';
import { rootDir } from '../../config/FileSystem';

export async function createWindow() {
    const mainWindow = new BrowserWindow(mainWindowConfig);

    // and load the index.html of the app.
    if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
        await mainWindow.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL);
    } else {
        await mainWindow.loadFile(path.join(rootDir, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`));
    }

    // Open the DevTools if in development mode
    if (appEnv === 'development') mainWindow.webContents.openDevTools();
}

export function quit() {
    if (process.platform !== 'darwin') app.quit();
}

export async function reCreateWindow() {
    if (BrowserWindow.getAllWindows().length === 0) await createWindow();
}
