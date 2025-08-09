import { WindowFactory } from './type';
import { AppWindow } from '../MainWindow';

export function activeAppHandler(createMainWindow: WindowFactory): AppWindow {
  return createMainWindow();
}
