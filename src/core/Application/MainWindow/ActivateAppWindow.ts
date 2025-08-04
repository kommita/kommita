export function reCreateMainWindow(createWindow: () => void, windowsCount: number): void {
    if (windowsCount === 0) createWindow();
}
