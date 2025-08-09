import { describe, expect, test, vi } from 'vitest';
import { AppWindow, WindowFactory } from './types';
import { initApp } from './InitApp';

describe('App Init', () => {
  const mainWindow: AppWindow = {
    open: vi.fn(),
    openDevTools: vi.fn(),
    show: vi.fn(),
    close: vi.fn(),
    resize: vi.fn(),
  } as unknown as AppWindow;

  const splashScreen: AppWindow = {
    open: vi.fn(),
    close: vi.fn(),
  } as unknown as AppWindow;

  test('it should handle main window & splash screen', async () => {
    const createMainWindow: WindowFactory = vi.fn().mockReturnValue(mainWindow);
    const createSplashScreen: WindowFactory = vi.fn().mockReturnValue(splashScreen);

    const result = await initApp(createMainWindow, createSplashScreen, {
      openDevTools: false,
      showSplashScreen: true,
    });

    expect(createSplashScreen).toHaveBeenCalledTimes(1);
    expect(splashScreen.open).toHaveBeenCalledTimes(1);
    expect(createMainWindow).toHaveBeenCalledTimes(1);
    expect(mainWindow.open).toHaveBeenCalledTimes(1);
    expect(mainWindow.openDevTools).not.toHaveBeenCalled();
    expect(splashScreen.close).toHaveBeenCalledTimes(1);
    expect(mainWindow.show).toHaveBeenCalledTimes(1);
    expect(result.mainWindow).toBe(mainWindow);
    expect(result.splashScreen).toBe(splashScreen);
  });

  test('it should open dev tools if configured', async () => {
    const createMainWindow: WindowFactory = vi.fn().mockReturnValue(mainWindow);
    const createSplashScreen: WindowFactory = vi.fn().mockReturnValue(splashScreen);

    await initApp(createMainWindow, createSplashScreen, {
      openDevTools: true,
      showSplashScreen: true,
    });

    expect(mainWindow.openDevTools).toHaveBeenCalledTimes(1);
  });

  test('it should not show splash screen if not requested', async () => {
    const createMainWindow: WindowFactory = vi.fn().mockReturnValue(mainWindow);
    const createSplashScreen: WindowFactory = vi.fn().mockReturnValue(splashScreen);

    const result = await initApp(createMainWindow, createSplashScreen, {
      openDevTools: false,
      showSplashScreen: false,
    });

    expect(createSplashScreen).not.toHaveBeenCalled();
    expect(createMainWindow).toHaveBeenCalled();
    expect(mainWindow.open).toHaveBeenCalled();
    expect(mainWindow.show).toHaveBeenCalled();
    expect(result.mainWindow).toBe(mainWindow);
    expect(result.splashScreen).toBeNull();
  });
});
