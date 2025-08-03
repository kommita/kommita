import { AppWindow } from '../../Application/CreateAppWindow';
import { OpenDevToolsHandler, OpenHandler, WindowMaker, WindowOptions } from './types';
import { partial } from 'ramda';

export function createElectronWindow(
    makeWindow: WindowMaker,
    openHandler: OpenHandler,
    openDevToolsHandler: OpenDevToolsHandler,
    options: WindowOptions
): AppWindow {
    const window = makeWindow({
        width: options.width,
        height: options.height,
        webPreferences: options.webPreferences,
    });

    return {
        open: partial(openHandler, [window, options]),
        openDevTools: partial(openDevToolsHandler, [window]),
    } as AppWindow;
}
