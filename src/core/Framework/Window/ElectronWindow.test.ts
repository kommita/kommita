import { expect, test, vi } from 'vitest';
import { createElectronWindow } from './ElectronWindow';
import { OpenDevToolsHandler, OpenHandler, WindowMaker, WindowOptions } from './types';
import { AppWindow } from '../../Application';

test('create electron window', () => {
  const windowMock = {
    show: vi.fn(),
    close: vi.fn(),
    setSize: vi.fn(),
    once: vi.fn(),
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
    devServerUrl: 'http://localhost:3000',
    mainWindowURL: 'path/to/main.html'
  };
  const window: AppWindow = createElectronWindow(maker, openHandler, openDevToolsHandler, windowOptions);

  expect(maker).toHaveBeenCalledWith(windowOptions.windowConstructorOptions);
  // For coverage purposes
  window.openDevTools();
  window.open();
  window.show();
  window.close();
  window.resize(1024, 768);
  window.on('ready-to-show', () => undefined);
  expect(openHandler).toHaveBeenCalled();
  expect(openDevToolsHandler).toHaveBeenCalled();
  expect(windowMock.show).toHaveBeenCalled();
  expect(windowMock.close).toHaveBeenCalled();
  expect(windowMock.setSize).toHaveBeenCalledWith(1024, 768);
  expect(windowMock.once).toHaveBeenCalledWith('ready-to-show', expect.any(Function));
});
