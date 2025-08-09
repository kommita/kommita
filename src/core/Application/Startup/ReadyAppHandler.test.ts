import { describe, expect, test, vi } from 'vitest';
import { AppWindow } from '../MainWindow';
import { initApp } from './ReadyAppHandler';

describe('On App Ready Handler', () => {
  test('it should create the main window and splash screen', async () => {
    const mainWindow = {} as unknown as AppWindow;
    const splashScreen = {} as unknown as AppWindow;
    const createMainWindow = vi.fn(() => mainWindow);
    const createSplashScreen = vi.fn(() => splashScreen);

    const actual = initApp(createMainWindow, createSplashScreen);

    expect(actual.mainWindow).toBe(mainWindow);
    expect(actual.splashScreen).toBe(splashScreen);
    expect(createMainWindow).toHaveBeenCalledTimes(1);
    expect(createSplashScreen).toHaveBeenCalledTimes(1);
  });
});
