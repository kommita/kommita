/* eslint-disable */
// @ts-nocheck

import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import viteReact from '@vitejs/plugin-react';

// https://vitejs.dev/config
export default defineConfig({
    plugins: [
        tailwindcss(),
        viteReact(),
    ],
});
