/* eslint-disable import/no-extraneous-dependencies */
import { fileURLToPath } from 'node:url';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

function root(...segments: string[]): string {
    return fileURLToPath(new URL(`./${segments.join('/')}`, import.meta.url));
}

function src(...segments: string[]): string {
    return root('src', ...segments);
}

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@app': src('app'),
            '@models': src('models'),
            '@store': src('store'),
            '@components': src('theme', 'components'),
        },
    },
});
