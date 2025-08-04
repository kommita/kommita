import { WindowOptions } from './types';

export function reCreateMainWindow(createWindow: (o: WindowOptions) => void, options: WindowOptions, windowsCount: number): void {
    if (windowsCount === 0) createWindow(options);
}
