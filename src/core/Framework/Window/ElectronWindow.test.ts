import { expect, test, vi } from 'vitest';
import { MainWindow } from '../../Application/MainWindow';
import { createMainWindow } from './ElectronWindow';
import { OpenDevToolsHandler, OpenHandler, WindowMaker, WindowOptions } from './types';

test('create electron window', () => {
  const windowMock = {
    show: vi.fn(),
  };
  const maker = vi.fn().mockReturnValue(windowMock) as WindowMaker;
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
  const window: MainWindow = createMainWindow(maker, openHandler, openDevToolsHandler, windowOptions);

  expect(maker).toHaveBeenCalledWith(windowOptions.windowConstructorOptions);
  // For coverage purposes
  window.openDevTools();
  window.open();
  window.show();
  expect(openHandler).toHaveBeenCalled();
  expect(openDevToolsHandler).toHaveBeenCalled();
  expect(windowMock.show).toHaveBeenCalled();
});
