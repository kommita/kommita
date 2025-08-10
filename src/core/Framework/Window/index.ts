import { BrowserWindow } from 'electron';

export * from './__WindowFactory';
export const getWindowsCount = () => BrowserWindow.getAllWindows().length;
