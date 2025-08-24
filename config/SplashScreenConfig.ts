import { appEnv } from './AppConfig';
import path from 'node:path';
import { rootDir } from './FileSystem';
import { WindowOptions } from '../src/core/Application';

export const splashScreenConfig: WindowOptions = {
  width: 600,
  height: 400,
  show: true,
  frame: false,
  transparent: true,
  resizable: false,
  center: true,
  isDev: appEnv === 'development',
  devServerUrl: MAIN_WINDOW_VITE_DEV_SERVER_URL + '/splash.html',
  mainWindowURL: path.join(rootDir, `../renderer/${MAIN_WINDOW_VITE_NAME}/splash.html`)
};
