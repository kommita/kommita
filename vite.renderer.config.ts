/* eslint-disable */
// @ts-nocheck

import { defineConfig } from 'vite';
import viteReact from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vitejs.dev/config
export default defineConfig({
    plugins: [
        viteReact(),
        tailwindcss(),
    ],
});
