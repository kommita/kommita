import { BrowserWindow } from 'electron';
import { WindowOptions } from './types';

export async function openHandler(window: BrowserWindow, options: WindowOptions): Promise<void> {
  if (options.isDev) {
    await window.loadURL(options.devServerUrl);
    return;
  }

  await window.loadFile(options.mainWindowURL);
}

export function openDevToolsHandler(window: BrowserWindow): void {
  window.webContents.openDevTools();
}
