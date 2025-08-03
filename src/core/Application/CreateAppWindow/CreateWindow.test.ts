import { describe, expect, test, vi } from 'vitest';
import { AppWindow, WindowFactory } from './types';
import { createWindow } from './CreateWindow';

describe('Create application window', () => {
    const window: AppWindow = {
        open: vi.fn(),
        openDevTools: vi.fn(),
    } as unknown as AppWindow;

    test('it should create open main window', async () => {
        const factory: WindowFactory = vi.fn().mockReturnValue(window);

        await createWindow(factory, { openDevTools: false });

        expect(factory).toHaveBeenCalledTimes(1);
        expect(window.open).toHaveBeenCalledTimes(1);
        expect(window.openDevTools).not.toHaveBeenCalled();
    });

    test('it should open dev tools if configured', async () => {
        const factory: WindowFactory = vi.fn().mockReturnValue(window);

        await createWindow(factory, { openDevTools: true });

        expect(window.openDevTools).toHaveBeenCalledTimes(1);
    });
});
