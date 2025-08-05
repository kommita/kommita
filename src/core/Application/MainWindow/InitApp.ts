import { MainWindow, MainWindowFactory, WindowOptions } from './types';

export async function initApp(create: MainWindowFactory, options: WindowOptions): Promise<void> {
  const window: MainWindow = create();

  await window.open();
  if (options.openDevTools) window.openDevTools();

  window.show();
}
