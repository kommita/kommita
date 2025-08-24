import { BrowserWindow, BrowserWindowConstructorOptions } from 'electron';
import { AppWindow } from '../../Application';

export type CreateWindowOptions = BrowserWindowConstructorOptions

export interface WindowMaker {
  (options: CreateWindowOptions): BrowserWindow;
}

export interface AppWindowConstructor {
  new(...args: unknown[]): AppWindow;
}
