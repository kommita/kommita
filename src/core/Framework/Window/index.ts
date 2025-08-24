import { CreateWindowOptions, WindowMaker } from './types';
import { BrowserWindow } from 'electron';
import { WindowFactory } from '../../Application';
import { partial } from 'ramda';
import { WindowWrapper } from './WindowWrapper';
import { createElectronWindow } from './ElectronWindow';

const windowMaker: WindowMaker = (options: CreateWindowOptions) => new BrowserWindow(options);
export const createWindow: WindowFactory = partial(createElectronWindow, [windowMaker, WindowWrapper]);
export const getWindowsCount = () => BrowserWindow.getAllWindows().length;
