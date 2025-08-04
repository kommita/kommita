export interface App {
    quit: () => void;
    on: (event: string, listener: (...args: unknown[]) => void) => void;
}

export type Platform = 'darwin' | 'win32' | 'linux';
