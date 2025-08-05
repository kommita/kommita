export function reCreateMainWindow(appInit: () => void, windowsCount: number): void {
    if (windowsCount === 0) appInit();
}
