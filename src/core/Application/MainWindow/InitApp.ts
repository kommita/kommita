import { AppWindow, WindowFactory, WindowOptions } from './types';

async function openSplashScreen(createSplashScreen: WindowFactory): Promise<AppWindow> {
  const splashScreen: AppWindow = createSplashScreen();
  await splashScreen.open();
  return splashScreen;
}

async function openMainWindow(createMainWindow: WindowFactory, options: WindowOptions): Promise<AppWindow> {
  const mainWindow: AppWindow = createMainWindow();
  await mainWindow.open();
  if (options.openDevTools) mainWindow.openDevTools();
  return mainWindow;
}

async function simulateLoadingTime(): Promise<void> {
  await new Promise(resolve => setTimeout(resolve, 1000));
}

async function switchScreens(splashScreen: AppWindow | null, mainWindow: AppWindow): Promise<void> {
  if (null !== splashScreen) {
    await simulateLoadingTime();
    splashScreen.close();
  }

  mainWindow.show();
}

export async function initApp(
  createMainWindow: WindowFactory,
  createSplashScreen: WindowFactory,
  options: WindowOptions
): Promise<void> {
  const splashScreen = options.showSplashScreen ? await openSplashScreen(createSplashScreen) : null;
  const mainWindow = await openMainWindow(createMainWindow, options);

  await switchScreens(splashScreen, mainWindow);
}
