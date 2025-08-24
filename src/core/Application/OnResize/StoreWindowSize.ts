import { AppWindow } from '../types';
import { UserSettingRepository } from '../../Domain';

export async function storeWindowSize(userSettingsRepository: UserSettingRepository, win: AppWindow): Promise<void> {
  const windowSize = win.getSize();
  await userSettingsRepository.patch({ window: { width: windowSize.width, height: windowSize.height } });
}
