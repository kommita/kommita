export interface App {
    quit: () => void;
    on: (event: string, listener: (...args: unknown[]) => void) => void;
}
