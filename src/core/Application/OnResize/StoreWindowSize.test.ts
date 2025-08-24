import { describe, expect, test, vi } from 'vitest';
import { UserSettingRepository } from '../../Domain';
import { AppWindow } from '../types';
import { storeWindowSize } from './StoreWindowSize';

describe('Store window size', () => {
  test('it should store window size', async () => {
    const appWindow: vi.mocked<AppWindow> = {
      getSize: vi.fn<AppWindow['getSize']>().mockReturnValue({ width: 800, height: 600 }),
    };
    const settingsRepository: vi.mocked<UserSettingRepository> = {
      patch: vi.fn<UserSettingRepository['patch']>(),
    };

    await storeWindowSize(settingsRepository, appWindow);
    expect(settingsRepository.patch).toHaveBeenCalledWith({ window: { width: 800, height: 600 } });
  });
});
