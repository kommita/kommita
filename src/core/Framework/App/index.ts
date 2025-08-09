import { app as electronApp } from 'electron';
import type { App } from '../../Application';
import started from 'electron-squirrel-startup';

export const app = electronApp as App;
export const isStarted: boolean = started;
