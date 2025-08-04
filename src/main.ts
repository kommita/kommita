import { handleStartup } from './core/Application/Startup';
import { app, shouldQuit } from './core/Framework/App';
import { createWindow, quit, reCreateMainWindow, WindowOptions } from './core/Application/MainWindow';
import { windowFactory } from './core/Framework/Window';
import { partial } from 'ramda';
import { appEnv } from '../config/AppConfig';
import { Platform } from './core/Application';
import { BrowserWindow } from 'electron';

handleStartup(shouldQuit, app);

const platform: Platform = process.platform as Platform;

const windowOptions: WindowOptions = {
    openDevTools: appEnv !== 'production',
};

const createAppWindow = partial(createWindow, [windowFactory]);
const quitApp = partial(quit, [app]);
const activateAppWindow = partial(reCreateMainWindow, [createAppWindow, windowOptions]);

app.on('ready', () => createAppWindow(windowOptions));
app.on('window-all-closed', () => quitApp(platform));
app.on('activate', () => activateAppWindow(BrowserWindow.getAllWindows().length));
