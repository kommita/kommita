// eslint-disable-next-line import/no-unresolved
import { defineConfig } from 'vitest/config';
import viteReact from '@vitejs/plugin-react';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
// @ts-expect-error the storybookTest member is exported by the vitest plugin
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';

const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  test: {
    projects: [{
      extends: true,
      test: {
        name: {
          label: 'core',
          color: 'blue'
        },
        environment: 'node',
        include: ['src/core/**/*.test.ts']
      }
    }, {
      extends: true,
      plugins: [viteReact()],
      test: {
        globals: true,
        // needed for auto-cleanup (React Testing Library)
        name: {
          label: 'ui',
          color: 'green'
        },
        environment: 'jsdom',
        include: ['src/ui/**/*.test.{ts,tsx}'],
        setupFiles: ['vitest.setup.ui.ts']
      }
    },
      {
        extends: true,
        plugins: [
          // The plugin will run tests for the stories defined in your Storybook config
          // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
          storybookTest({
            configDir: path.join(dirname, '.storybook')
          })],
        test: {
          name: 'storybook',
          browser: {
            enabled: true,
            headless: true,
            provider: 'playwright',
            instances: [{
              browser: 'chromium'
            }]
          },
          setupFiles: ['.storybook/vitest.setup.ts']
        }
      }],
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    coverage: {
      reporter: ['text', 'html'],
      thresholds: {
        statements: 100,
        functions: 100,
        branches: 100,
        lines: 100,
      },
      include: [
        'src/core/**/*.ts',
        'src/ui/**/*.ts',
        'src/ui/**/*.tsx',
      ],
      exclude: [
        '**/index.ts',
        '**/config/**',
        '**/tests/**',
        '**/types.ts',
        '**/__*.ts',
        'src/ui/App.tsx',
        'src/ui/pages/**/*.tsx',
      ],
    },
  }
});
