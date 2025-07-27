import started from 'electron-squirrel-startup';
import { app } from 'electron';

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
export function winHandleStartup() {
    if (started) {
        app.quit();
    }
}
