import path from 'path';
import { defineConfig } from 'vite';
import alias from '@rollup/plugin-alias';
import { svelte } from '@sveltejs/vite-plugin-svelte';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		alias({
			entries: [
				{
					find: 'lib',
					replacement: path.resolve(__dirname, "src/lib")
				},
				{
					find: 'json',
					replacement: path.resolve(__dirname, "src/json")
				},
				{
					find: 'public',
					replacement: path.resolve(__dirname, "public")
				}
			]
		}),
		svelte()
	]
})
