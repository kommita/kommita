import { WindowOptions } from './types';
import path from 'node:path';
import { rootDir } from '../../../../config/FileSystem';
import { appEnv } from '../../../../config/AppConfig';

export const defaultWindowOptions: WindowOptions = {
  windowConstructorOptions: {
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
