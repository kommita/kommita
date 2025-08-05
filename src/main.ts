import { handleStartup } from './core/Application/Startup';
import { app, shouldQuit } from './core/Framework/App';
import { initApp, quitApp, reCreateMainWindow, WindowOptions } from './core/Application/MainWindow';
import { partial } from 'ramda';
import { appEnv } from '../config/AppConfig';
import { Platform } from './core/Application';
import { BrowserWindow } from 'electron';
import { createMainWindow } from './core/Framework/Window';

handleStartup(shouldQuit, app);

const windowOptions: WindowOptions = {
  openDevTools: appEnv !== 'production',
};

const initAppHandler = partial(initApp, [createMainWindow, windowOptions]);
app.on('ready', initAppHandler);

const platform: Platform = process.platform as Platform;
const quitAppHandler = partial(quitApp, [app, platform]);
app.on('window-all-closed', quitAppHandler);

const activateAppHandler = partial(reCreateMainWindow, [initAppHandler]);
app.on('activate', () => activateAppHandler(BrowserWindow.getAllWindows().length));
