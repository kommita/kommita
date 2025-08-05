import { CreateWindowOptions, WindowMaker } from './types';
import { BrowserWindow } from 'electron';
import { WindowFactory } from '../../Application/MainWindow';
import { partial } from 'ramda';
import { createElectronWindow } from './ElectronWindow';
import { openDevToolsHandler, openHandler } from './WindowHelper';
import { defaultWindowOptions } from './__DefaultWindowOptions';

const windowMaker: WindowMaker = (options: CreateWindowOptions) => new BrowserWindow(options);
export const createMainWindow: WindowFactory = partial(createElectronWindow, [
  windowMaker,
  openHandler,
  openDevToolsHandler,
  defaultWindowOptions,
]);
