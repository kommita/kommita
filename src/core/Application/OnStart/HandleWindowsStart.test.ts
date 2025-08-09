import { describe, expect, test, vi } from 'vitest';
import { App } from '../types';
import { handleWindowsStart } from './HandleWindowsStart';

describe('Windows start handler', () => {
  test('it should quit the app if started', () => {
    const app: App = { quit: vi.fn() } as unknown as App;

    handleWindowsStart(true, app);

    expect(app.quit).toHaveBeenCalled();
  });

  test('it should skip quitting the app if not started', () => {
    const app: App = { quit: vi.fn() } as unknown as App;

    handleWindowsStart(false, app);

    expect(app.quit).not.toHaveBeenCalled();
  });
});
