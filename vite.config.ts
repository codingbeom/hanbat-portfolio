import react from '@vitejs/plugin-react-swc';
import { defineConfig, loadEnv } from 'vite';

// https://vitejs.dev/config/

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), '');
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
					manualChunks(id) {
						if (id.includes('node_modules')) {
							const parts = id.split('node_modules/')[1].split('/');
							return parts[0] === '.pnpm' ? parts[1] : parts[0];
						} else {
							return null;
						}
					},
				},
			},
		},
	};
});
