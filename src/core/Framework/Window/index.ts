import { BrowserWindow } from 'electron';

export * from './__WindowFactory';
export const windowsCount = BrowserWindow.getAllWindows().length;
