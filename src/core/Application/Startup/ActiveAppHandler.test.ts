import { describe, expect, test, vi } from 'vitest';
import { AppWindow } from '../MainWindow';
import { activeAppHandler } from './ActiveAppHandler';

describe('Active App Handler', () => {
  test('it should create main window', () => {
    const mainWindow = {} as unknown as AppWindow;
    const factory = vi.fn(() => mainWindow);

    const actual = activeAppHandler(factory);

    expect(actual).toBe(mainWindow);
    expect(factory).toHaveBeenCalledTimes(1);
  });
});
