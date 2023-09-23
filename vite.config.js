import { resolve } from 'path';
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte';
import dynamicImport from 'vite-plugin-dynamic-import'
import alias from '@rollup/plugin-alias';

export default defineConfig({
  plugins: [
    svelte(),
    alias({
      entries: [
        { find: 'lib', replacement: resolve(__dirname, 'src/lib')},
      ]
    }),
    dynamicImport()
  ],
});