import { describe, expect, test, vi } from 'vitest';
import { App } from '../types';
import { quitApp } from './QuitApp';

describe('App quit', () => {
    test('it should quit the app on non-darwin platforms', () => {
        const app: App = { quit: vi.fn() } as unknown as App;

        quitApp(app, 'win32');

        expect(app.quit).toHaveBeenCalledTimes(1);
    });

    test('it should not quit the app on darwin platform', () => {
        const app: App = { quit: vi.fn() } as unknown as App;

        quitApp(app, 'darwin');

        expect(app.quit).not.toHaveBeenCalled();
    });
});
