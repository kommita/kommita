import { AppWindow } from '../types';

export async function switchScreens(
  main: AppWindow,
  splash: AppWindow,
  simulateLoadingTime: () => Promise<void>
): Promise<void> {
  await splash.open();
  await simulateLoadingTime();

  await main.open();
  main.on('ready-to-show', async () => {
    main.show();
    splash.close();
  });
}
