import { SettingFinder, SettingPersistor } from './types';
import { UserSetting } from '../../../Domain';
import { merge } from 'ts-deepmerge';

export async function patchUserSetting(find: SettingFinder, persist: SettingPersistor, patch: Partial<UserSetting>): Promise<void> {
  const currentSetting = await find();
  await persist(merge(currentSetting, patch));
}
