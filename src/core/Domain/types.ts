export interface UserSetting {
  window: {
    width: number;
    height: number;
  };
}

export interface UserSettingRepository {
  find: () => Promise<UserSetting>;
  save: (setting: UserSetting) => Promise<void>;
  patch: (setting: Partial<UserSetting>) => Promise<void>;
}
