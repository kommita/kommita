export interface App {
    quit: () => void;
    on: (event: string, listener: (...args: never[]) => void) => void;
}
