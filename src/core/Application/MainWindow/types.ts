export interface AppWindow {
  open: () => Promise<void>;
  openDevTools: () => void;
  show: () => void;
  close: () => void;
  resize: (width: number, height: number) => void;
}

export interface WindowOptions {
  openDevTools: boolean;
  showSplashScreen: boolean;
}

export interface WindowFactory {
  (): AppWindow;
}

export interface InitAppResult {
  mainWindow: AppWindow;
  splashScreen: AppWindow | null;
}
