import { CreateWindowOptions, WindowMaker } from './types';
import { BrowserWindow } from 'electron';
import { partial } from 'ramda';
import { createElectronWindow } from './ElectronWindow';
import { mainWindowOptions, splashScreenOptions } from './__WindowOptions';
import { WindowFactory } from '../../Application';
import { WindowWrapper } from './WindowWrapper';

const windowMaker: WindowMaker = (options: CreateWindowOptions) => new BrowserWindow(options);

const createWindow = partial(createElectronWindow, [windowMaker, WindowWrapper]);

export const createMainWindow: WindowFactory = () => createWindow(mainWindowOptions);
export const createSplashScreen: WindowFactory = () => createWindow(splashScreenOptions);
