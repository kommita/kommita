import { App } from '../types';

export function handleWindowsStart(isStarted: boolean, app: App): void {
  if (isStarted) app.quit();
}
