import { expect, test, vi } from 'vitest';
import { UserSetting } from '../../../Domain';
import { storeUserSetting } from './StoreUserSetting';
import { FileManager } from './types';

test('store user setting', async function () {
  const userSetting: UserSetting = {
    window: {
      width: 800,
      height: 600,
    },
  };
  const currentDirectory = import.meta.dirname;
  const fileManager: FileManager = { writeFile: vi.fn() } as unknown as FileManager;

  await storeUserSetting(fileManager, currentDirectory, userSetting);

  expect(fileManager.writeFile).toHaveBeenCalledWith(
    `${currentDirectory}/user-settings.json`,
    JSON.stringify(userSetting)
  );
});
