import { AppWindow, WindowFactory, WindowOptions } from './types';

export async function initApp(createMainWindow: WindowFactory, options: WindowOptions): Promise<void> {
  const window: AppWindow = createMainWindow();

  await window.open();
  if (options.openDevTools) window.openDevTools();

  window.show();
}
