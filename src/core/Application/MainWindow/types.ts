export type WindowEvent = 'ready-to-show';

export interface WindowEventHandler {
  (window: AppWindow): void | Promise<void>;
}

export interface AppWindow {
  open: () => Promise<void>;
  openDevTools: () => void;
  show: () => void;
  close: () => void;
  resize: (width: number, height: number) => void;
  on: (event: WindowEvent, handler: WindowEventHandler) => void;
}

export interface WindowOptions {
  openDevTools: boolean;
  showSplashScreen: boolean;
}

export interface InitAppResult {
  mainWindow: AppWindow;
  splashScreen: AppWindow | null;
}
