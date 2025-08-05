import { AppWindow, WindowFactory, WindowOptions } from './types';

export async function initApp(create: WindowFactory, options: WindowOptions): Promise<void> {
  const window: AppWindow = create();
  await window.open();
  if (options.openDevTools) window.openDevTools();
}
