import { quit, reCreateWindow } from './core/MainWindow';
import { handleStartup } from './core/Application/Startup';
import { app, shouldQuit } from './core/Framework/App';
import { partial } from 'ramda';
import { createWindow } from './core/Application/OpenMainWindow';
import { windowFactory } from './core/Framework/Window';
import { openDevTools } from '../config/AppConfig';

handleStartup(shouldQuit, app);

const onAppReady = partial(createWindow, [windowFactory, { openDevTools }]);

app.on('ready', onAppReady);
app.on('window-all-closed', quit);
app.on('activate', reCreateWindow);
