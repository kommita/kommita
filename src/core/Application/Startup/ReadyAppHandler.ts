import { InitAppResult, WindowFactory } from './type';

export function initApp(createMainWindow: WindowFactory, createSplashscreen: WindowFactory): InitAppResult {
  const splashScreen = createSplashscreen();
  const mainWindow = createMainWindow();

  return {
    mainWindow,
    splashScreen,
  };
}
