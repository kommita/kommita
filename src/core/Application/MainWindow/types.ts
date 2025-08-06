export interface AppWindow {
  open: () => Promise<void>;
  openDevTools: () => void;
  show: () => void;
  close: () => void;
  resize: (width: number, height: number) => void;
}

export interface WindowOptions {
  openDevTools: boolean;
}

export interface WindowFactory {
  (): AppWindow;
}
