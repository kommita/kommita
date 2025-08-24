import { describe, expect, test, vi } from 'vitest';
import { WindowWrapper } from './WindowWrapper';
import { BrowserWindow } from 'electron';
import { AppWindow, WindowOptions } from '../../Application';

describe('Window Wrapper', () => {
  const browserWindow = {
    webContents: {
      openDevTools: vi.fn(),
    },
    loadURL: vi.fn(),
    loadFile: vi.fn(),
    show: vi.fn(),
    close: vi.fn(),
    setSize: vi.fn(),
    getSize: vi.fn(() => [800, 600]),
    once: vi.fn((_, listener) => {
      listener();
    }),
    on: vi.fn((_, listener) => {
      listener();
    }),
  } as unknown as BrowserWindow;

  const options: WindowOptions = {
    height: 0,
    width: 0,
    isDev: false,
    devServerUrl: 'http://localhost:3000',
    mainWindowURL: 'file://path/to/index.html'
  };

  test('open dev tools', () => {
    const sut = new WindowWrapper(browserWindow, options);

    sut.openDevTools();

    expect(browserWindow.webContents.openDevTools).toHaveBeenCalled();
  });

  test('open in dev mode', async () => {
    const optionsInDevMode = { ...options, isDev: true };
    const sut = new WindowWrapper(browserWindow, optionsInDevMode);

    await sut.open();

    expect(browserWindow.loadURL).toHaveBeenCalledWith(optionsInDevMode.devServerUrl);
  });

  test('open in prod mode', async () => {
    const sut = new WindowWrapper(browserWindow, options);

    await sut.open();

    expect(browserWindow.loadFile).toHaveBeenCalledWith(options.mainWindowURL);
  });

  test('show window', () => {
    const sut = new WindowWrapper(browserWindow, options);

    sut.show();

    expect(browserWindow.show).toHaveBeenCalled();
  });

  test('close window', () => {
    const sut = new WindowWrapper(browserWindow, options);

    sut.close();

    expect(browserWindow.close).toHaveBeenCalled();
  });

  test('resize window', () => {
    const sut = new WindowWrapper(browserWindow, options);
    const width = 800;
    const height = 600;

    sut.resize(width, height);

    expect(browserWindow.setSize).toHaveBeenCalledWith(width, height);
  });

  test('get window size', () => {
    const sut = new WindowWrapper(browserWindow, options);

    const actual = sut.getSize();

    expect(actual).toEqual({ width: 800, height: 600 });
  });

  describe('Window events', () => {
    test('unknown events should fail', () => {
      const sut = new WindowWrapper(browserWindow, options);
      // @ts-expect-error Testing invalid event
      expect(() => sut.on('unknown-event', (e) => e)).toThrow('Unsupported event: unknown-event');
    });

    test('it should handle the ready-to-show event', () => {
      const sut = new WindowWrapper(browserWindow, options);
      const handler = vi.fn().mockImplementationOnce((w: AppWindow) => w);

      sut.on('ready-to-show', handler);

      expect(browserWindow.once).toHaveBeenCalledWith('ready-to-show', expect.any(Function));
      expect(handler).toHaveBeenCalledWith(sut);
    });

    test('it should handle the resize event', () => {
      const sut = new WindowWrapper(browserWindow, options);
      const handler = vi.fn().mockImplementationOnce((w: AppWindow) => w);

      sut.on('resize', handler);

      expect(browserWindow.on).toHaveBeenCalledWith('resize', expect.any(Function));
      expect(handler).toHaveBeenCalledWith(sut);
    });
  });
});
