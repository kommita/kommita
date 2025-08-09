import { InitAppResult, WindowFactory } from '../type';

export function createMainWindowAndSplashScreen(createMainWindow: WindowFactory, createSplashscreen: WindowFactory): InitAppResult {
  const splashScreen = createSplashscreen();
  const mainWindow = createMainWindow();

  return {
    mainWindow,
    splashScreen,
  };
}
