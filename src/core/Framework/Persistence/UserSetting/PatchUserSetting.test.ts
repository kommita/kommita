import { expect, test, vi } from 'vitest';
import { SettingFinder, SettingPersistor } from './types';
import { UserSetting } from '../../../Domain';
import { patchUserSetting } from './PatchUserSetting';

test('Patch user setting', async () => {
  const finder: SettingFinder = vi.fn().mockReturnValue({ window: { width: 100 } }) as unknown as SettingFinder;
  const persistor: SettingPersistor = vi.fn() as unknown as SettingPersistor;
  const patch = { window: { width: 1024, height: 768 } } as unknown as Partial<UserSetting>;

  await patchUserSetting(finder, persistor, patch);

  expect(finder).toHaveBeenCalled();
  expect(persistor).toHaveBeenCalledWith({ window: { width: 1024, height: 768 } });
});
