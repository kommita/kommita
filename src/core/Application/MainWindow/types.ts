export interface AppWindow {
  open: () => Promise<void>;
  openDevTools: () => void;
  show: () => void;
  close: () => void;
}

export interface WindowOptions {
  openDevTools: boolean;
}

export interface MainWindowFactory {
  (): AppWindow;
}
