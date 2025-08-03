import { BrowserWindow } from 'electron';

export interface WindowOptions {
    width: number;
    height: number;
    webPreferences: {
        preload: string;
    };
    isDev: boolean;
    openDevTools: boolean;
    devServerUrl: string;
    mainWindowURL: string;
}

export interface WindowMaker {
    (options: Omit<WindowOptions, 'isDev' | 'devServerUrl' | 'mainWindowURL' | 'openDevTools'>): BrowserWindow;
}

export interface OpenHandler {
    (window: BrowserWindow, options: WindowOptions): Promise<void>;
}

export interface OpenDevToolsHandler {
    (window: BrowserWindow, options: WindowOptions): void;
}
