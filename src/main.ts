import { reCreateWindow } from './core/MainWindow';
import { handleStartup } from './core/Application/Startup';
import { app, shouldQuit } from './core/Framework/App';
import { createWindow, quit } from './core/Application/MainWindow';
import { windowFactory } from './core/Framework/Window';
import { partial } from 'ramda';
import { appEnv } from '../config/AppConfig';
import { Platform } from './core/Application';

handleStartup(shouldQuit, app);

const createAppWindow = partial(createWindow, [windowFactory]);

const quitApp = partial(quit, [app]);
const platform: Platform = process.platform as Platform;

app.on('ready', () => createAppWindow({ openDevTools: appEnv !== 'production' }));
app.on('window-all-closed', () => quitApp(platform));
app.on('activate', reCreateWindow);
