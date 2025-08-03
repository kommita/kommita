import { describe, expect, test, vi } from 'vitest';
import { App } from '../../types';
import { handleStartup } from './HandleStartup';

describe('Handler Startup', () => {
    test('it should quit the app if started', () => {
        const app: App = { quit: vi.fn() } as App;

        handleStartup(true, app);

        expect(app.quit).toHaveBeenCalled();
    });

    test('it should skip quitting the app if not started', () => {
        const app: App = { quit: vi.fn() } as App;

        handleStartup(false, app);

        expect(app.quit).not.toHaveBeenCalled();
    });
});
