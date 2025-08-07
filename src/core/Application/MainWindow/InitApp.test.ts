import { describe, expect, test, vi } from 'vitest';
import { AppWindow, WindowFactory } from './types';
import { initApp } from './InitApp';
import { UserSettingRepository } from '../../Domain';

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

  const setting: UserSettingRepository = {
    find: vi.fn().mockResolvedValue({
      window: {
        width: 800,
        height: 600,
      },
    })
  } as unknown as UserSettingRepository;

  test('it should handle main window & splash screen', async () => {
    const createMainWindow: WindowFactory = vi.fn().mockReturnValue(mainWindow);
    const createSplashScreen: WindowFactory = vi.fn().mockReturnValue(splashScreen);

    await initApp(createMainWindow, createSplashScreen, setting, { openDevTools: false });

    expect(createSplashScreen).toHaveBeenCalledTimes(1);
    expect(splashScreen.open).toHaveBeenCalledTimes(1);
    expect(createMainWindow).toHaveBeenCalledTimes(1);
    expect(mainWindow.open).toHaveBeenCalledTimes(1);
    expect(mainWindow.openDevTools).not.toHaveBeenCalled();
    expect(splashScreen.close).toHaveBeenCalledTimes(1);
    expect(mainWindow.show).toHaveBeenCalledTimes(1);
    expect(mainWindow.resize).toHaveBeenCalledWith(800, 600);
  });

  test('it should open dev tools if configured', async () => {
    const createMainWindow: WindowFactory = vi.fn().mockReturnValue(mainWindow);
    const createSplashScreen: WindowFactory = vi.fn().mockReturnValue(splashScreen);

    await initApp(createMainWindow, createSplashScreen, setting, { openDevTools: true });

    expect(mainWindow.openDevTools).toHaveBeenCalledTimes(1);
  });
});
