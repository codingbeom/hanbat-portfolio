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
	};
});
