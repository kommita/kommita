import { handleStartup } from './core/Application/Startup';
import { app, shouldQuit } from './core/Framework/App';
import { createWindow, quit, reCreateMainWindow } from './core/Application/MainWindow';
import { windowFactory } from './core/Framework/Window';
import { partial } from 'ramda';
import { appEnv } from '../config/AppConfig';
import { Platform } from './core/Application';
import { BrowserWindow } from 'electron';

handleStartup(shouldQuit, app);

const createAppWindow = partial(createWindow, [windowFactory]);

const quitApp = partial(quit, [app]);
const platform: Platform = process.platform as Platform;

const activateAppWindow = partial(reCreateMainWindow, [createAppWindow, { openDevTools: appEnv !== 'production' }]);

app.on('ready', () => createAppWindow({ openDevTools: appEnv !== 'production' }));
app.on('window-all-closed', () => quitApp(platform));
app.on('activate', () => activateAppWindow(BrowserWindow.getAllWindows().length));
