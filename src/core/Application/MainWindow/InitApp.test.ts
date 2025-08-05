import { describe, expect, test, vi } from 'vitest';
import { AppWindow, WindowFactory } from './types';
import { initApp } from './InitApp';

describe('App Init', () => {
  const window: AppWindow = {
    open: vi.fn(),
    openDevTools: vi.fn(),
    show: vi.fn(),
  } as unknown as AppWindow;

  test('it should handle main window & splash screen', async () => {
    const createMainWindow: WindowFactory = vi.fn().mockReturnValue(window);

    await initApp(createMainWindow, { openDevTools: false });

    expect(createMainWindow).toHaveBeenCalledTimes(1);
    expect(window.open).toHaveBeenCalledTimes(1);
    expect(window.openDevTools).not.toHaveBeenCalled();
    expect(window.show).toHaveBeenCalledTimes(1);
  });

  test('it should open dev tools if configured', async () => {
    const createMainWindow: WindowFactory = vi.fn().mockReturnValue(window);

    await initApp(createMainWindow, { openDevTools: true });

    expect(window.openDevTools).toHaveBeenCalledTimes(1);
  });
});
