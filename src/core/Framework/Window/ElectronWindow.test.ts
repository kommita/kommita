import { describe, expect, test, vi } from 'vitest';
import { createElectronWindow } from './ElectronWindow';
import { AppWindowConstructor, WindowMaker } from './types';
import { BrowserWindow } from 'electron';
import { WindowOptions } from '../../Application';


describe('Electron browser window', () => {
  test('create electron window', () => {
    const browserWindowMock = {} as unknown as BrowserWindow;
    const windowOptions: WindowOptions = {
      devServerUrl: '',
      isDev: false,
      mainWindowURL: '',
      width: 800,
      height: 600
    };
    const maker = vi.fn().mockReturnValue(browserWindowMock) as WindowMaker;
    const AppWindowWrapper = vi.fn() as unknown as AppWindowConstructor;
    createElectronWindow(maker, AppWindowWrapper, windowOptions);

    expect(maker).toHaveBeenCalledWith({ width: 800, height: 600 });
    expect(AppWindowWrapper).toHaveBeenCalledWith(browserWindowMock, windowOptions);
  });
});
