import { WindowOptions } from './types';
import path from 'node:path';
import { rootDir } from '../../../../config/FileSystem';
import { appEnv } from '../../../../config/AppConfig';

export const mainWindowOptions: WindowOptions = {
  windowConstructorOptions: {
    width: 960,
    height: 540,
    webPreferences: {
      preload: path.join(rootDir, 'preload.js'),
    },
    titleBarStyle: 'hidden',
    show: false,
  },
  isDev: appEnv === 'development',
  devServerUrl: MAIN_WINDOW_VITE_DEV_SERVER_URL,
  mainWindowURL: path.join(rootDir, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`)
};
