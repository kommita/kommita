import { MainWindow, MainWindowFactory, WindowOptions } from './types';

export async function initApp(createMainWindow: MainWindowFactory, options: WindowOptions): Promise<void> {
  const window: MainWindow = createMainWindow();

  await window.open();
  if (options.openDevTools) window.openDevTools();

  window.show();
}
