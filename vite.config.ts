import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// @ts-expect-error remove error
import eslint from 'vite-plugin-eslint';
import svgr from 'vite-plugin-svgr';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react(),
		eslint(),
		svgr({
			include: '**/*.svg?react',
		}),
	],
	resolve: {
		alias: {
			src: path.resolve(__dirname, 'src'),
		},
	},
});
