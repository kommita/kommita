import { app } from 'electron';
import { createWindow, quit, reCreateWindow } from './core/MainWindow';
import { handleWindowsShortcuts } from './core/windows/ShortcutHandler';

handleWindowsShortcuts();

app.on('ready', createWindow);
app.on('window-all-closed', quit);
app.on('activate', reCreateWindow);
