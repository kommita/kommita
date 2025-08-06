import { FileManager } from './types';
import { UserSetting } from '../../../Domain';

export async function findUserSetting(fm: FileManager, path: string, defaultSetting: UserSetting): Promise<UserSetting> {
  const fullPath = path + '/user-settings.json';

  return !fm.exists(fullPath) ? defaultSetting : JSON.parse(fm.readFile(fullPath));
}
