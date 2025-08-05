import { AppWindow } from '../../Application/MainWindow';
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
  };
}
