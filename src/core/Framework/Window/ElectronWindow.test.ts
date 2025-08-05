import { expect, test, vi } from 'vitest';
import { AppWindow } from '../../Application/MainWindow';
import { createElectronWindow } from './ElectronWindow';
import { OpenDevToolsHandler, OpenHandler, WindowMaker, WindowOptions } from './types';

test('create electron window', () => {
  const maker = vi.fn() as WindowMaker;
  const openHandler = vi.fn() as OpenHandler;
  const openDevToolsHandler = vi.fn() as OpenDevToolsHandler;
  const windowOptions: WindowOptions = {
    windowConstructorOptions: {
      width: 800,
      height: 600,
      webPreferences: { preload: 'path/to/preload.js' },
    },
    isDev: true,
    openDevTools: true,
    devServerUrl: 'http://localhost:3000',
    mainWindowURL: 'path/to/main.html'
  };
  const window: AppWindow = createElectronWindow(maker, openHandler, openDevToolsHandler, windowOptions);

  expect(maker).toHaveBeenCalledWith(windowOptions.windowConstructorOptions);
  window.openDevTools();
  window.open();
  expect(openHandler).toHaveBeenCalled();
  expect(openDevToolsHandler).toHaveBeenCalled();
});
