import { describe, expect, test, vi } from 'vitest';
import { reCreateMainWindow } from './ActivateAppWindow';

describe('Activate application window', () => {
    test('it should recreate the main window if all windows are closed', () => {
        const createAppWindow = vi.fn();

        reCreateMainWindow(createAppWindow, { openDevTools: false }, 0);

        expect(createAppWindow).toHaveBeenCalledTimes(1);
    });

    test('it should not recreate the main window if there are open windows', () => {
        const createAppWindow = vi.fn();

        reCreateMainWindow(createAppWindow, { openDevTools: false }, 1);

        expect(createAppWindow).not.toHaveBeenCalled();
    });
});
