import { CreateWindowOptions, WindowMaker } from './types';
import { BrowserWindow } from 'electron';
import { partial } from 'ramda';
import { createElectronWindow } from './WindowFactory';
import { openDevToolsHandler, openHandler } from './WindowHelper';
import { WindowFactory } from '../../Application/MainWindow';
import { defaultWindowOptions } from './__DefaultWindowOptions';

const windowMaker: WindowMaker = (options: CreateWindowOptions) => new BrowserWindow(options);

export const windowFactory: WindowFactory = partial(createElectronWindow, [
    windowMaker,
    openHandler,
    openDevToolsHandler,
    defaultWindowOptions,
]);
