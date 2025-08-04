import { WindowMaker, WindowOptions } from './types';
import { appEnv, mainWindowConfig } from '../../../../config/AppConfig';
import path from 'node:path';
import { rootDir } from '../../../../config/FileSystem';
import { BrowserWindow } from 'electron';
import { partial } from 'ramda';
import { createElectronWindow } from './WindowFactory';
import { openDevToolsHandler, openHandler } from './WindowHelper';
import { WindowFactory } from '../../Application/MainWindow';

const defaultWindowOptions: WindowOptions = {
    ...mainWindowConfig,
    isDev: appEnv === 'development',
    openDevTools: false,
    devServerUrl: MAIN_WINDOW_VITE_DEV_SERVER_URL,
    mainWindowURL: path.join(rootDir, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`)
};

const windowMaker: WindowMaker = (options: WindowOptions) => new BrowserWindow(options);

export const windowFactory: WindowFactory = partial(createElectronWindow, [
    windowMaker,
    openHandler,
    openDevToolsHandler,
    defaultWindowOptions,
]);
