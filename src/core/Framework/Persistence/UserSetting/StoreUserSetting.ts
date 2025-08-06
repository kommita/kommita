import { UserSetting } from '../../../Domain';
import { FileManager } from './types';

export async function storeUserSetting(fm: FileManager, path: string, userSetting: UserSetting): Promise<void> {
  fm.writeFile(`${path}/user-settings.json`, JSON.stringify(userSetting));
}
