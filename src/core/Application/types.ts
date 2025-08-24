export interface App {
  quit: () => void;
  on: (event: string, listener: (...args: unknown[]) => void) => void;
}

export type Platform = 'darwin' | 'win32' | 'linux';

export type WindowEvent = 'ready-to-show' | 'resize';

export interface WindowEventHandler {
  (window: AppWindow): void | Promise<void>;
}

export interface WindowSize {
  width: number;
  height: number;
}

export interface AppWindow {
  open: () => Promise<void>;
  openDevTools: () => void;
  show: () => void;
  close: () => void;
  resize: (width: number, height: number) => void;
  on: (event: WindowEvent, handler: WindowEventHandler) => void;
  getSize: () => WindowSize;
}

export type WindowOptions = {
  width: number;
  height: number;
  frame?: boolean;
  transparent?: boolean;
  resizable?: boolean;
  center?: boolean;
  show?: boolean;
  titleBarStyle?: 'hidden';
  titleBarOverlay?: boolean;
  webPreferences?: {
    preload: string;
  }
  isDev: boolean;
  devServerUrl: string;
  mainWindowURL: string;
};

export interface WindowFactory {
  (options: WindowOptions): AppWindow;
}
