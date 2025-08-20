import { describe, expect, test, vi } from 'vitest';
import { createElectronWindow } from './ElectronWindow';
import { AppWindowConstructor, WindowMaker, WindowOptions } from './types';
import { BrowserWindow } from 'electron';


describe('Electron browser window', () => {
  test('create electron window', () => {
    const browserWindowMock = {} as unknown as BrowserWindow;
    const windowOptions = {} as WindowOptions;
    const maker = vi.fn().mockReturnValue(browserWindowMock) as WindowMaker;
    const AppWindowWrapper = vi.fn() as unknown as AppWindowConstructor;
    createElectronWindow(maker, AppWindowWrapper, windowOptions);

    expect(maker).toHaveBeenCalledWith(windowOptions.windowConstructorOptions);
    expect(AppWindowWrapper).toHaveBeenCalledWith(browserWindowMock, windowOptions);
  });
});
