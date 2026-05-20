import react from '@vitejs/plugin-react-swc';
import { defineConfig, loadEnv } from 'vite';
// https://vitejs.dev/config/
export default defineConfig(function (_a) {
    var mode = _a.mode;
    var env = loadEnv(mode, process.cwd(), '');
    console.log(env);
    return {
        plugins: [react()],
        base: '/hanbat-portfolio',
        resolve: {
            alias: [
                { find: '@', replacement: '/src' },
                { find: '&', replacement: '/src/assets/images' },
            ],
        },
        build: {
            assetsInlineLimit: 0,
            rollupOptions: {
                output: {
                    manualChunks: function (id) {
                        if (id.includes('node_modules')) {
                            var parts = id.split('node_modules/')[1].split('/');
                            return parts[0] === '.pnpm' ? parts[1] : parts[0];
                        }
                        else {
                            return null;
                        }
                    },
                },
            },
        },
    };
});
