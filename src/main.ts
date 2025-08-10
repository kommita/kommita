import { handleWindowsStart } from './core/Application/OnStart';
import { app, isStartedOnWindows } from './core/Framework/App';
import { AppWindow, Platform } from './core/Application';
import { createMainWindow, createSplashScreen, windowsCount } from './core/Framework/Window';
import { switchScreens } from './core/Application/OnReady';
import { quitApp } from './core/Application/OnWindowAllClosed';
import { openDevTools } from '../config/AppConfig';

handleWindowsStart(isStartedOnWindows, app);

async function commonHandler(mainWindow: AppWindow): Promise<void> {
  if (openDevTools) mainWindow.openDevTools();
}

app.on('ready', async () => {
  const splashScreen = createSplashScreen();
  const mainWindow = createMainWindow();

  await switchScreens(mainWindow, splashScreen, async function (): Promise<void> {
    await new Promise(resolve => setTimeout(resolve, 1000));
  });

  await commonHandler(mainWindow);
});

app.on('window-all-closed', () => {
  quitApp(app, process.platform as Platform);
});

app.on('activate', async () => {
  if (0 === windowsCount) {
    const mainWindow = createMainWindow();
    await mainWindow.open();
    mainWindow.on('ready-to-show', () => mainWindow.show());
    await commonHandler(mainWindow);
  }
});
