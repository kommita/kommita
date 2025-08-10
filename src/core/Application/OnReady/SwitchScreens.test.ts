import { describe, expect, test, vi } from 'vitest';
import { switchScreens } from './SwitchScreens';
import { AppWindow } from '../types';

describe('Switch screens', () => {
  const openSplash = vi.fn();
  const simulateLoadingTime = vi.fn();
  const closeSplash = vi.fn();

  const openMain = vi.fn();
  const onHandler = vi.fn((_, handler) => handler());
  const showMain = vi.fn();

  const main: AppWindow = {
    open: openMain,
    on: onHandler,
    show: showMain,
  } as unknown as AppWindow;

  const splash: AppWindow = {
    open: openSplash,
    close: closeSplash,
  } as unknown as AppWindow;


  test(
    `Execution order of the switchScreens function:
    1.Open splash screen.
    2.Simulate loading time.
    3.Open main window.
    4. Show main window when ready.
    5. Close splash screen.
    `
    , async () => {
      await switchScreens(main, splash, simulateLoadingTime);

      expect(openSplash.mock.invocationCallOrder).toEqual([1]);
      expect(simulateLoadingTime.mock.invocationCallOrder).toEqual([2]);
      expect(openMain.mock.invocationCallOrder).toEqual([3]);
      expect(onHandler.mock.invocationCallOrder).toEqual([4]);
      expect(onHandler).toHaveBeenCalledWith('ready-to-show', expect.any(Function));
      expect(showMain.mock.invocationCallOrder).toEqual([5]);
      expect(closeSplash.mock.invocationCallOrder).toEqual([6]);
    });
});
