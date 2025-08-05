import { App, Platform } from '../types';

export function quitApp(app: App, platform: Platform) {
    if ('darwin' !== platform) {
        app.quit();
    }
}
