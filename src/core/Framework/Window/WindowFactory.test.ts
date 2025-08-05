import { describe, expect, test, vi } from 'vitest';
import { AppWindow } from '../../Application/MainWindow';
import { createElectronWindow } from './WindowFactory';
import { OpenDevToolsHandler, OpenHandler, WindowMaker } from './types';

describe('Window factory', () => {
    test('create window', () => {
        const maker = vi.fn() as WindowMaker;
        const openHandler = vi.fn() as OpenHandler;
        const openDevToolsHandler = vi.fn() as OpenDevToolsHandler;
        const windowOptions = {
            createOptions: {
                width: 800,
                height: 600,
                webPreferences: { preload: 'path/to/preload.js' },
            },
            isDev: true,
            openDevTools: true,
            devServerUrl: 'http://localhost:3000',
            mainWindowURL: 'path/to/main.html'
        };
        const window: AppWindow = createElectronWindow(maker, openHandler, openDevToolsHandler, windowOptions);

        expect(maker).toHaveBeenCalledWith(windowOptions.createOptions);
        window.openDevTools();
        window.open();
        expect(openHandler).toHaveBeenCalled();
        expect(openDevToolsHandler).toHaveBeenCalled();
    });
});
