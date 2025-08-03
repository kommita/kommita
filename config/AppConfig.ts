import path from 'node:path';
import { rootDir } from './FileSystem';

export const appEnv = process.env.NODE_ENV || 'production';
export const openDevTools = appEnv === 'development';

export const mainWindowConfig = {
    width: 800,
    height: 600,
    webPreferences: {
        preload: path.join(rootDir, 'preload.js'),
    },
};
