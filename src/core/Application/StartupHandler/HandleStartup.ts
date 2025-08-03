import { App } from '../../types';

export function handleStartup(started: boolean, app: App): void {
    if (started) app.quit();
}
