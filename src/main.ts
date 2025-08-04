import { quit, reCreateWindow } from './core/MainWindow';
import { handleStartup } from './core/Application/Startup';
import { app, shouldQuit } from './core/Framework/App';
import { createWindow } from './core/Application/CreateAppWindow';
import { windowFactory } from './core/Framework/Window';
import { partial } from 'ramda';
import { appEnv } from '../config/AppConfig';

handleStartup(shouldQuit, app);

const createAppWindow = partial(createWindow, [windowFactory]);

app.on('ready', () => createAppWindow({ openDevTools: appEnv !== 'production' }));
app.on('window-all-closed', quit);
app.on('activate', reCreateWindow);
