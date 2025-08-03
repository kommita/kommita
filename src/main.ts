import { createWindow, quit, reCreateWindow } from './core/MainWindow';
import { handleStartup } from './core/Application/StartupHandler/HandleStartup';
import { app, shouldQuit } from './core/Framework/App';

handleStartup(shouldQuit, app);

app.on('ready', createWindow);
app.on('window-all-closed', quit);
app.on('activate', reCreateWindow);
