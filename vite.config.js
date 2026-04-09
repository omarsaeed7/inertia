import inertia from '@inertiajs/vite'
import tailwindcss from '@tailwindcss/vite';
import laravel from 'laravel-vite-plugin'
import { defineConfig } from 'vite'

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/js/app.jsx'],
            refresh: true,
        }),
        inertia(),
        tailwindcss(),
    ],
    server: {
        proxy: {
            '/upload': {
                target: 'http://localhost:8000',
                changeOrigin: true,
            },
        },
    },
})