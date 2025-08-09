import { WindowOptions } from './types';
import path from 'node:path';
import { rootDir } from '../../../../config/FileSystem';
import { appEnv } from '../../../../config/AppConfig';
import { userSettingRepository } from '../Persistence/UserSetting';
import { BrowserWindowConstructorOptions } from 'electron';

const userSettings = await userSettingRepository.find();

const windowConstructorOptions: BrowserWindowConstructorOptions = {
  width: 960,
  height: 540,
  webPreferences: {
    preload: path.join(rootDir, 'preload.js'),
  },
  titleBarStyle: 'hidden',
  show: false,
  ...userSettings.window,
};

export const mainWindowOptions: WindowOptions = {
  windowConstructorOptions,
  isDev: appEnv === 'development',
  devServerUrl: MAIN_WINDOW_VITE_DEV_SERVER_URL,
  mainWindowURL: path.join(rootDir, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`)
};

export const splashScreenOptions: WindowOptions = {
  windowConstructorOptions: {
    width: 600,
    height: 400,
    webPreferences: {
      preload: path.join(rootDir, 'preload.js'),
    },
    frame: false,
    transparent: true,
    resizable: false,
    center: true,
  },
  isDev: appEnv === 'development',
  devServerUrl: MAIN_WINDOW_VITE_DEV_SERVER_URL + '/splash.html',
  mainWindowURL: path.join(rootDir, `../renderer/${MAIN_WINDOW_VITE_NAME}/splash.html`)
};
