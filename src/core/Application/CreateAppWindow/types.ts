export interface AppWindow {
    open: () => Promise<void>;
    openDevTools: () => void;
}

export interface WindowOptions {
    openDevTools: boolean;
}

export interface WindowFactory {
    (): AppWindow;
}
