import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	base: "/hanbat-portfolio",
	resolve: {
		alias: [
			{ find: "@", replacement: "/src" },
			{ find: "&", replacement: "/src/assets/images" },
		],
	},
});
