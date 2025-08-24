import { describe, expect, test, vi } from 'vitest';
import { storeWindowSize } from './StoreWindowSize';
import { AppWindow } from '../types';
import { UserSettingRepository } from '../../Domain';

describe('Store window size', () => {
  test('it should store window size', async () => {
    const appWindow: Pick<AppWindow, 'getSize'> = {
      getSize: vi.fn().mockReturnValue({ width: 800, height: 600 }),
    };
    const settingsRepository: Pick<UserSettingRepository, 'patch'> = {
      patch: vi.fn(),
    };

    await storeWindowSize(settingsRepository as UserSettingRepository, appWindow as AppWindow);
    
    expect(settingsRepository.patch).toHaveBeenCalledWith({ window: { width: 800, height: 600 } });
  });
});
