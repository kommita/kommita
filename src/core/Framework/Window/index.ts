import { CreateWindowOptions, WindowMaker, WindowOptions } from './types';
import { appEnv } from '../../../../config/AppConfig';
import path from 'node:path';
import { rootDir } from '../../../../config/FileSystem';
import { BrowserWindow } from 'electron';
import { partial } from 'ramda';
import { createElectronWindow } from './WindowFactory';
import { openDevToolsHandler, openHandler } from './WindowHelper';
import { WindowFactory } from '../../Application/MainWindow';

const defaultWindowOptions: WindowOptions = {
    createOptions: {
        width: 600,
        height: 400,
        webPreferences: {
            preload: path.join(rootDir, 'preload.js'),
        },
    },
    isDev: appEnv === 'development',
    openDevTools: false,
    devServerUrl: MAIN_WINDOW_VITE_DEV_SERVER_URL,
    mainWindowURL: path.join(rootDir, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`)
};

const windowMaker: WindowMaker = (options: CreateWindowOptions) => new BrowserWindow(options);

export const windowFactory: WindowFactory = partial(createElectronWindow, [
    windowMaker,
    openHandler,
    openDevToolsHandler,
    defaultWindowOptions,
]);
