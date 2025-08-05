import { CreateWindowOptions, WindowMaker } from './types';
import { BrowserWindow } from 'electron';
import { MainWindowFactory } from '../../Application/MainWindow';
import { partial } from 'ramda';
import { createMainWindow } from './ElectronWindow';
import { openDevToolsHandler, openHandler } from './WindowHelper';
import { defaultWindowOptions } from './__DefaultWindowOptions';

const windowMaker: WindowMaker = (options: CreateWindowOptions) => new BrowserWindow(options);
export const mainWindowFactory: MainWindowFactory = partial(createMainWindow, [
  windowMaker,
  openHandler,
  openDevToolsHandler,
  defaultWindowOptions,
]);
