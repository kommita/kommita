import { describe, expect, test, vi } from 'vitest';
import { reCreateMainWindow } from './ActivateApp';

describe('Activate application window', () => {
    test('it should recreate the main window if all windows are closed', () => {
        const appInit = vi.fn();

        reCreateMainWindow(appInit, 0);

        expect(appInit).toHaveBeenCalledTimes(1);
    });

    test('it should not recreate the main window if there are open windows', () => {
        const appInit = vi.fn();

        reCreateMainWindow(appInit, 1);

        expect(appInit).not.toHaveBeenCalled();
    });
});
