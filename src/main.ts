import { handleWindowsStart } from './core/Application/OnStart';
import { app, isStartedOnWindows } from './core/Framework/App';
import { AppWindow, Platform } from './core/Application';
import { createWindow, getWindowsCount } from './core/Framework/Window';
import { quitApp } from './core/Application/OnWindowAllClosed';
import { openDevTools } from '../config/AppConfig';
import { userSettingRepository } from './core/Framework/Persistence/UserSetting';
import { UserSetting } from './core/Domain';
import { switchScreens } from './core/Application/OnReady';
import { splashScreenConfig } from '../config/SplashScreenConfig';
import { mainWindowConfig } from '../config/MainWindowConfig';

handleWindowsStart(isStartedOnWindows, app);

async function main(mainWindow: AppWindow): Promise<void> {
  if (openDevTools) mainWindow.openDevTools();
}

app.on('ready', async () => {
  const splashScreen = createWindow(splashScreenConfig);
  const mainWindow = await createMainWindow();

  await switchScreens(mainWindow, splashScreen, async function (): Promise<void> {
    await new Promise(resolve => setTimeout(resolve, 1000));
  });

  await main(mainWindow);
});

app.on('window-all-closed', () => {
  quitApp(app, process.platform as Platform);
});

app.on('activate', async () => {
  if (0 === getWindowsCount()) {
    const mainWindow = await createMainWindow();
    await mainWindow.open();
    mainWindow.on('ready-to-show', () => mainWindow.show());
    await main(mainWindow);
  }
});

async function createMainWindow(): Promise<AppWindow> {
  const userSettings: UserSetting = await userSettingRepository.find();
  return createWindow({ ...mainWindowConfig, ...userSettings.window });
}
