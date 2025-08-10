import { CreateWindowOptions, WindowMaker } from './types';
import { BrowserWindow } from 'electron';
import { partial } from 'ramda';
import { createElectronWindow } from './ElectronWindow';
import { openDevToolsHandler, openHandler } from './WindowHelper';
import { mainWindowOptions, splashScreenOptions } from './__WindowOptions';
import { WindowFactory } from '../../Application';

const windowMaker: WindowMaker = (options: CreateWindowOptions) => new BrowserWindow(options);

const createWindow = partial(createElectronWindow, [
  windowMaker,
  openHandler,
  openDevToolsHandler
]);

export const createMainWindow: WindowFactory = () => createWindow(mainWindowOptions);
export const createSplashScreen: WindowFactory = () => createWindow(splashScreenOptions);
