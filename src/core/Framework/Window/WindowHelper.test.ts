import { describe, expect, test, vi } from 'vitest';
import { BrowserWindow } from 'electron';
import { WindowOptions } from './types';
import { openDevToolsHandler, openHandler } from './WindowHelper';

describe('Window helper', () => {
    describe('Open handler', () => {
        test('it should open main window', async () => {
            const window = { loadFile: vi.fn() } as unknown as BrowserWindow;
            const options = { isDev: false, mainWindowURL: 'path/to/main/window.html' } as unknown as WindowOptions;

            await openHandler(window, options);

            expect(window.loadFile).toHaveBeenCalledWith(options.mainWindowURL);
        });

        test('it should open dev server in dev mode', async () => {
            const window = { loadURL: vi.fn() } as unknown as BrowserWindow;
            const options = { isDev: true, devServerUrl: 'http://localhost:3000' } as unknown as WindowOptions;

            await openHandler(window, options);

            expect(window.loadURL).toHaveBeenCalledWith(options.devServerUrl);
        });
    });

    describe('Open dev tools handler', () => {
        test('it should open dev tool', () => {
            const window = { webContents: { openDevTools: vi.fn() } } as unknown as BrowserWindow;

            openDevToolsHandler(window);

            expect(window.webContents.openDevTools).toHaveBeenCalled();
        });
    });
});
