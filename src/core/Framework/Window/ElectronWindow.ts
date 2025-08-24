import { AppWindowConstructor, WindowMaker } from './types';
import { AppWindow, WindowOptions } from '../../Application';

export function createElectronWindow(makeWindow: WindowMaker, AppWindow: AppWindowConstructor, options: WindowOptions): AppWindow {
  const window = makeWindow({
    width: options.width,
    height: options.height,
    frame: options.frame,
    transparent: options.transparent,
    resizable: options.resizable,
    center: options.center,
    show: options.show,
    titleBarStyle: options.titleBarStyle,
    titleBarOverlay: options.titleBarOverlay,
    webPreferences: options.webPreferences,
  });

  return new AppWindow(window, options);
}
