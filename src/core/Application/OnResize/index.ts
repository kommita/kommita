import { partial } from 'ramda';
import { WindowEventHandler } from '../types';
import { storeWindowSize } from './StoreWindowSize';
import { userSettingRepository } from '../../Framework/Persistence/UserSetting';

export const handleWindowResize: WindowEventHandler = partial(storeWindowSize, [userSettingRepository]);
