import { AppWindow, WindowEvent, WindowEventHandler } from '../../Application';
import { BrowserWindow } from 'electron';
import { WindowOptions } from './types';

export class WindowWrapper implements AppWindow {
  private browserWindow: BrowserWindow;
  private options: WindowOptions;

  constructor(
    browserWindow: BrowserWindow,
    options: WindowOptions,
  ) {
    this.browserWindow = browserWindow;
    this.options = options;
  }

  openDevTools(): void {
    this.browserWindow.webContents.openDevTools();
  }

  async open(): Promise<void> {
    if (this.options.isDev) {
      await this.browserWindow.loadURL(this.options.devServerUrl);
      return;
    }
    await this.browserWindow.loadFile(this.options.mainWindowURL);
  }

  show(): void {
    this.browserWindow.show();
  }

  close(): void {
    this.browserWindow.close();
  }

  resize(width: number, height: number): void {
    this.browserWindow.setSize(width, height);
  }

  on(event: WindowEvent, handler: WindowEventHandler): void {
    if (event === 'ready-to-show') {
      this.browserWindow.once(event, () => handler(this));
    }
  }
}
