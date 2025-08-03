import { AppWindow } from '../../Application/OpenMainWindow';
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

    return <AppWindow>{
        open: partial(openHandler, [window, options]),
        openDevTools: partial(openDevToolsHandler, [window]),
    };
}
