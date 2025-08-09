import { AppWindow, WindowEvent, WindowEventHandler } from '../../Application/MainWindow';
import { OpenDevToolsHandler, OpenHandler, WindowMaker, WindowOptions } from './types';

export function createElectronWindow(
  makeWindow: WindowMaker,
  openHandler: OpenHandler,
  openDevToolsHandler: OpenDevToolsHandler,
  options: WindowOptions
): AppWindow {
  const window = makeWindow(options.windowConstructorOptions);

  return {
    open: () => openHandler(window, options),
    openDevTools: () => openDevToolsHandler(window, options),
    show: () => window.show(),
    close: () => window.close(),
    resize: (width: number, height: number) => window.setSize(width, height),
    on: (event: WindowEvent, handler: WindowEventHandler) => {
      if (event === 'ready-to-show') {
        window.once(event, () => handler(window as unknown as AppWindow));
      }
    }
  };
}
