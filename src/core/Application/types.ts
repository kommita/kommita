export interface App {
  quit: () => void;
  on: (event: string, listener: (...args: unknown[]) => void) => void;
}

export type Platform = 'darwin' | 'win32' | 'linux';

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

export interface WindowFactory {
  (): AppWindow;
}
