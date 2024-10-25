import {defineConfig} from "vite";
import autoprefixer from "autoprefixer";

// https://vitejs.dev/config/
export default defineConfig({
	base: "./",
	server: {
		host: '127.0.0.1',
		port: 5173,
		// 是否开启 https
		https: false,
	},
	css: {
		postcss: {
			plugins: [
				autoprefixer({
					overrideBrowserslist: [
						"Android 4.1",
						"iOS 7.1",
						"Chrome > 31",
						"ff > 31",
						"ie >= 8",
						"> 1%",
					]
				})
			]
		}
	}
});
