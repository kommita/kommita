import { App } from '../types';

export function handleStartup(shouldQuit: boolean, app: App): void {
    if (shouldQuit) app.quit();
}
