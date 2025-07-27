/* eslint-disable */
// @ts-nocheck

import { defineConfig } from 'vite';

// https://vitejs.dev/config
export default defineConfig({
    build: {
        lib: {
            formats: ['es'],
            entry: 'src/preload.ts',
        },
        rollupOptions: {
            output: { entryFileNames: 'preload.js' }
        }
    }
});
