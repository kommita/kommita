import { BrowserWindow, BrowserWindowConstructorOptions } from 'electron';

export type CreateWindowOptions = BrowserWindowConstructorOptions

export interface WindowOptions {
  windowConstructorOptions: CreateWindowOptions;
  isDev: boolean;
  devServerUrl: string;
  mainWindowURL: string;
}

export interface WindowMaker {
  (options: CreateWindowOptions): BrowserWindow;
}

export interface OpenHandler {
  (window: BrowserWindow, options: WindowOptions): Promise<void>;
}

export interface OpenDevToolsHandler {
  (window: BrowserWindow, options: WindowOptions): void;
}
