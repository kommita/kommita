import { App, Platform } from '../types';

export function quit(app: App, platform: Platform) {
    if ('darwin' !== platform) {
        app.quit();
    }
}
