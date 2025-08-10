import { describe, expect, Mock, test, vi } from 'vitest';
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
    1. Open splash screen.
    2. Simulate loading time.
    3. Open main window.
    4. Show main window when ready.
    5. Close splash screen.
    `
    , async () => {
      await switchScreens(main, splash, simulateLoadingTime);

      expect(openSplash).toHaveBeenCalled();
      expect(simulateLoadingTime).toHaveBeenCalled();
      expect(openMain).toHaveBeenCalled();
      expect(onHandler).toHaveBeenCalledWith('ready-to-show', expect.any(Function));
      expect(showMain).toHaveBeenCalled();
      expect(closeSplash).toHaveBeenCalled();

      const getOrder = (fn: Mock<(...args: unknown[]) => unknown>) => fn.mock.invocationCallOrder[0];
      expect(getOrder(openSplash)).toBeLessThan(getOrder(simulateLoadingTime));
      expect(getOrder(simulateLoadingTime)).toBeLessThan(getOrder(openMain));
      expect(getOrder(openMain)).toBeLessThan(getOrder(onHandler));
      expect(getOrder(onHandler)).toBeLessThan(getOrder(showMain));
      expect(getOrder(showMain)).toBeLessThan(getOrder(closeSplash));
    });
});
