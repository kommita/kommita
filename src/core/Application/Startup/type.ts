import { AppWindow } from '../MainWindow';

export interface InitAppResult {
  mainWindow: AppWindow;
  splashScreen: AppWindow;
}

export interface WindowFactory {
  (): AppWindow;
}
