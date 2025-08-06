import { UserSetting } from '../../../Domain';

export interface FileManager {
  writeFile: (path: string, data: string) => void;
  readFile: (path: string) => string;
  exists: (path: string) => boolean;
}

export interface SettingFinder {
  (): Promise<UserSetting>;
}

export interface SettingPersistor {
  (userSetting: UserSetting): Promise<void>;
}
