import { AppWindow, WindowFactory, WindowOptions } from './types';

export async function initApp(
  createMainWindow: WindowFactory,
  createSplashScreen: WindowFactory,
  options: WindowOptions
): Promise<void> {
  const splashScreen: AppWindow = createSplashScreen();
  await splashScreen.open();

  const mainWindow: AppWindow = createMainWindow();
  await mainWindow.open();
  if (options.openDevTools) mainWindow.openDevTools();

  // simulate loading time
  await new Promise(resolve => setTimeout(resolve, 1000));
  splashScreen.close();

  mainWindow.show();
}
