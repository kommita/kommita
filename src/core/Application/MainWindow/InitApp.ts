import { AppWindow, WindowFactory, WindowOptions } from './types';
import { UserSetting, UserSettingRepository } from '../../Domain';

async function openSplashScreen(createSplashScreen: WindowFactory) {
  const splashScreen: AppWindow = createSplashScreen();
  await splashScreen.open();
  return splashScreen;
}

async function openMainWindow(createMainWindow: WindowFactory, options: WindowOptions) {
  const mainWindow: AppWindow = createMainWindow();
  await mainWindow.open();
  if (options.openDevTools) mainWindow.openDevTools();
  return mainWindow;
}

async function restoreUserSetting(userSettingRepository: UserSettingRepository, mainWindow: AppWindow) {
  const userSetting: UserSetting = await userSettingRepository.find();
  const { width, height } = userSetting.window;
  mainWindow.resize(width, height);

  // simulate loading time
  await new Promise(resolve => setTimeout(resolve, 1000));
}

function switchScreens(splashScreen: AppWindow, mainWindow: AppWindow) {
  splashScreen.close();
  mainWindow.show();
}

export async function initApp(
  createMainWindow: WindowFactory,
  createSplashScreen: WindowFactory,
  userSettingRepository: UserSettingRepository,
  options: WindowOptions
): Promise<void> {
  const splashScreen = await openSplashScreen(createSplashScreen);
  const mainWindow = await openMainWindow(createMainWindow, options);

  await restoreUserSetting(userSettingRepository, mainWindow);
  
  switchScreens(splashScreen, mainWindow);
}
