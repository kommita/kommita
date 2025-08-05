import { MainWindow } from '../../Application/MainWindow';
import { OpenDevToolsHandler, OpenHandler, WindowMaker, WindowOptions } from './types';

export function createMainWindow(
  makeWindow: WindowMaker,
  openHandler: OpenHandler,
  openDevToolsHandler: OpenDevToolsHandler,
  options: WindowOptions
): MainWindow {
  const window = makeWindow(options.windowConstructorOptions);

  return {
    open: () => openHandler(window, options),
    openDevTools: () => openDevToolsHandler(window, options),
  };
}
