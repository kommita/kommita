// eslint-disable-next-line import/no-unresolved
import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        projects: [
            {
                extends: true,
                test: {
                    typecheck: { enabled: true },
                    name: { label: 'core', color: 'blue' },
                    environment: 'node',
                    include: [
                        'src/core/**/*.test.ts',
                    ],
                },
            },
            {
                extends: true,
                test: {
                    typecheck: { enabled: true },
                    name: { label: 'ui', color: 'yellow' },
                    environment: 'jsdom',
                    include: [
                        'src/ui/**/*.test.{ts,tsx}',
                    ],
                },
            },
        ],
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        coverage: {
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
            ],
        },
    }
});
