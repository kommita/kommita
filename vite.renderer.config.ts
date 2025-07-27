/* eslint-disable */
// @ts-nocheck

import { defineConfig } from 'vite';
import viteReact from '@vitejs/plugin-react';
import tailwindPostCssPlugin from '@tailwindcss/postcss';

// https://vitejs.dev/config
export default defineConfig({
    plugins: [viteReact()],
    css: {
        postcss: {
            plugins: [tailwindPostCssPlugin]
        }
    },
});
