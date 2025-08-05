import { BrowserWindow } from 'electron';

export interface CreateWindowOptions {
    width: number;
    height: number;
    webPreferences: {
        preload: string;
    };
}

export interface WindowOptions {
    createOptions: CreateWindowOptions;
    isDev: boolean;
    openDevTools: boolean;
    devServerUrl: string;
    mainWindowURL: string;
}

export interface WindowMaker {
    (options: CreateWindowOptions): BrowserWindow;
}

export interface OpenHandler {
    (window: BrowserWindow, options: WindowOptions): Promise<void>;
}

export interface OpenDevToolsHandler {
    (window: BrowserWindow, options: WindowOptions): void;
}
