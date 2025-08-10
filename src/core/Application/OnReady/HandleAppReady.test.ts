import { describe, expect, test, vi } from 'vitest';
import { switchScreens } from './SwitchScreens';
import { AppWindow } from '../types';

describe('Switch screens', () => {
  const main: AppWindow = {
    open: vi.fn(),
    on: vi.fn((event, handler) => {
      if (event === 'ready-to-show') {
        handler();
      }
    }),
    show: vi.fn(),
  } as unknown as AppWindow;

  const splash: AppWindow = {
    open: vi.fn(),
    close: vi.fn(),
  } as unknown as AppWindow;

  const wait = vi.fn();

  test('it should open splash screen', async () => {
    await switchScreens(main, splash, wait);

    expect(splash.open).toHaveBeenCalled();
  });

  test('it should open main window', async () => {
    await switchScreens(main, splash, wait);

    expect(main.open).toHaveBeenCalled();
  });

  test('it should close splash screen when main window is ready', async () => {
    await switchScreens(main, splash, wait);

    expect(splash.close).toHaveBeenCalled();
  });

  test('it should show main window when ready', async () => {
    await switchScreens(main, splash, wait);

    expect(main.show).toHaveBeenCalled();
  });
});
