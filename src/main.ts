import { handleStartup } from './core/Application/Startup';
import { app, shouldQuit } from './core/Framework/App';
import { initApp, quitApp, reCreateMainWindow, WindowOptions } from './core/Application/MainWindow';
import { partial, pipe } from 'ramda';
import { appEnv } from '../config/AppConfig';
import { Platform } from './core/Application';
import { BrowserWindow } from 'electron';
import { createMainWindow, createSplashScreen } from './core/Framework/Window';

handleStartup(shouldQuit, app);

const windowOptions: WindowOptions = {
  openDevTools: appEnv !== 'production',
  showSplashScreen: true,
};

function disableSplashScreen(): void {
  windowOptions.showSplashScreen = false;
}

const initAppHandler = pipe(
  // Initialize the app with main window and splash screen
  partial(initApp, [createMainWindow, createSplashScreen, windowOptions]),
  // pipeline all after initialization steps
  disableSplashScreen
);
app.on('ready', initAppHandler);

const platform: Platform = process.platform as Platform;
const quitAppHandler = partial(quitApp, [app, platform]);
app.on('window-all-closed', quitAppHandler);

const activateAppHandler = partial(reCreateMainWindow, [partial(initApp, [createMainWindow, createSplashScreen, windowOptions])]);
app.on('activate', () => activateAppHandler(BrowserWindow.getAllWindows().length));
