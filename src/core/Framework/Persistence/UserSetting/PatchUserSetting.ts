import { SettingFinder, SettingPersistor } from './types';
import { UserSetting } from '../../../Domain';

export async function patchUserSetting(find: SettingFinder, persist: SettingPersistor, patch: Partial<UserSetting>): Promise<void> {
  const currentSetting = await find();
  const updatedSetting = { ...currentSetting, ...patch };

  await persist(updatedSetting);
}
