import path from 'node:path';
import { rootDir } from './FileSystem';
import { appEnv } from './AppConfig';
import { WindowOptions } from '../src/core/Application';

export const mainWindowConfig: WindowOptions = {
  width: 960,
  height: 540,
  resizable: true,
  webPreferences: {
    preload: path.join(rootDir, 'preload.js'),
  },
  show: false,
  titleBarStyle: 'hidden',
  ...(process.platform !== 'darwin' ? { titleBarOverlay: true } : {}),
  isDev: appEnv === 'development',
  devServerUrl: MAIN_WINDOW_VITE_DEV_SERVER_URL,
  mainWindowURL: path.join(rootDir, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`)
};
