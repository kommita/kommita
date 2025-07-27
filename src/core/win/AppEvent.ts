import started from 'electron-squirrel-startup';
import { app } from 'electron';

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
export function winOnStartup() {
    if (started) {
        app.quit();
    }
}
