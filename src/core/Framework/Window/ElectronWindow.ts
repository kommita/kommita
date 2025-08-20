import { AppWindowConstructor, WindowMaker, WindowOptions } from './types';
import { AppWindow } from '../../Application';

export function createElectronWindow(makeWindow: WindowMaker, AppWindow: AppWindowConstructor, options: WindowOptions): AppWindow {
  const window = makeWindow(options.windowConstructorOptions);

  return new AppWindow(window, options);
}
