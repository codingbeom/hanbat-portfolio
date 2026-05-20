import react from '@vitejs/plugin-react-swc';
import { defineConfig, splitVendorChunkPlugin } from 'vite';
import path from 'path';

export default defineConfig({
	plugins: [react(), splitVendorChunkPlugin()],

	base: '/hanbat-portfolio/',

	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
			'&': path.resolve(__dirname, 'src/assets/images'),
		},
	},

	build: {
		assetsInlineLimit: 0,
		target: 'esnext',
		minify: 'esbuild',
		sourcemap: false,
		cssCodeSplit: true,
		chunkSizeWarningLimit: 1000,

		rollupOptions: {
			output: {
				entryFileNames: 'assets/js/[name]-[hash].js',
				chunkFileNames: 'assets/js/[name]-[hash].js',
				assetFileNames: 'assets/[name]-[hash][extname]',
				manualChunks(id) {
					if (id.includes('node_modules')) {
						const parts = id.split('node_modules/')[1].split('/');
						const pkgName = parts[0].startsWith('@')
							? `${parts[0]}/${parts[1]}`
							: parts[0];
						return `vendor/${pkgName}`;
					} else {
						return null;
					}
				},
			},
		},
	},

	esbuild: {
		drop: ['console', 'debugger'],
	},
});
