import { handleWindowsStart } from './core/Application/OnStart';
import { app, isStarted } from './core/Framework/App';
import { AppWindow, Platform } from './core/Application';
import { createMainWindow, createSplashScreen, windowsCount } from './core/Framework/Window';
import { handleAppReady } from './core/Application/OnReady';
import { quitApp } from './core/Application/OnWindowAllClosed';
import { openDevTools } from '../config/AppConfig';

handleWindowsStart(isStarted, app);

async function commonHandler(mainWindow: AppWindow): Promise<void> {
  if (openDevTools) mainWindow.openDevTools();
}

app.on('ready', async () => {
  const splashScreen = createSplashScreen();
  const mainWindow = createMainWindow();

  async function simulateLoadingTime(): Promise<void> {
    await new Promise(resolve => setTimeout(resolve, 1000));
  }

  await handleAppReady(mainWindow, splashScreen, simulateLoadingTime);

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
