export interface MainWindow {
  open: () => Promise<void>;
  openDevTools: () => void;
}

export interface WindowOptions {
  openDevTools: boolean;
}

export interface MainWindowFactory {
  (): MainWindow;
}
