import { describe, expect, test, vi } from 'vitest';
import { FileManager } from './types';
import { UserSetting } from '../../../Domain';
import { findUserSetting } from './FindUserSetting';

describe('Find user setting', () => {
  const defaultSetting = { window: { width: 800, height: 600 } } as unknown as UserSetting;
  test('it should find default user settings when no settings file exists', async () => {
    const fileManager: FileManager = { exists: vi.fn().mockReturnValue(false) } as unknown as FileManager;
    const path = '/path/to/settings';

    const actual = await findUserSetting(fileManager, path, defaultSetting);

    expect(actual).toEqual(defaultSetting);
    expect(fileManager.exists).toHaveBeenCalledWith(`${path}/user-settings.json`);
  });

  test('it should return user settings from file when exists', async () => {
    const fileManager: FileManager = {
      exists: vi.fn().mockReturnValue(true),
      readFile: vi.fn().mockReturnValue(JSON.stringify({ window: { width: 1024, height: 768 } })),
    } as unknown as FileManager;
    const path = '/path/to/settings';

    const actual = await findUserSetting(fileManager, path, defaultSetting);

    expect(actual).toEqual({ window: { width: 1024, height: 768 } });
    expect(fileManager.exists).toHaveBeenCalledWith(`${path}/user-settings.json`);
    expect(fileManager.readFile).toHaveBeenCalledWith(`${path}/user-settings.json`);
  });
});
