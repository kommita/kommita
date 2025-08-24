import { AppWindow, WindowEvent, WindowEventHandler, WindowOptions, WindowSize } from '../../Application';
import { BrowserWindow } from 'electron';

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

  getSize(): WindowSize {
    const [width, height] = this.browserWindow.getSize();
    return { width, height };
  }

  on(event: WindowEvent, handler: WindowEventHandler): void {
    if (event === 'ready-to-show') {
      this.browserWindow.once(event, () => handler(this));
    }

    if (event === 'resize') {
      this.browserWindow.on('resize', () => handler(this));
    }
  }
}
