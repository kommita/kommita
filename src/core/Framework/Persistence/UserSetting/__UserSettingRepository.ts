import { FileManager } from './types';
import * as fs from 'node:fs';
import { partial } from 'ramda';
import { findUserSetting } from './FindUserSettting';
import { storeUserSetting } from './StoreUserSetting';
import { patchUserSetting } from './PatchUserSetting';
import { UserSettingRepository } from '../../../Domain';
import { app } from 'electron';
import { defaultUserSetting } from './__DefaultUserSetting';

const fileManager: FileManager = {
  writeFile: fs.writeFileSync,
  readFile: fs.readFileSync,
  exists: fs.existsSync,
};

const settingPath = app.getPath('userData');
const find = partial(findUserSetting, [fileManager, settingPath, defaultUserSetting]);
const store = partial(storeUserSetting, [fileManager, settingPath]);
const patch = partial(patchUserSetting, [find, store]);

export const userSettingRepository: UserSettingRepository = {
  find,
  store,
  patch,
} as unknown as UserSettingRepository;
