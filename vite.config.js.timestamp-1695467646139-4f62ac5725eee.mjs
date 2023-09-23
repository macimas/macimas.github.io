// vite.config.js
import { resolve } from "path";
import { defineConfig } from "file:///home/macimas/Desktop/github/macimas/macimas.github.io/node_modules/.pnpm/vite@4.4.9/node_modules/vite/dist/node/index.js";
import { svelte } from "file:///home/macimas/Desktop/github/macimas/macimas.github.io/node_modules/.pnpm/@sveltejs+vite-plugin-svelte@2.4.5_svelte@4.2.0_vite@4.4.9/node_modules/@sveltejs/vite-plugin-svelte/src/index.js";
import dynamicImport from "file:///home/macimas/Desktop/github/macimas/macimas.github.io/node_modules/.pnpm/vite-plugin-dynamic-import@1.5.0/node_modules/vite-plugin-dynamic-import/dist/index.mjs";
import alias from "file:///home/macimas/Desktop/github/macimas/macimas.github.io/node_modules/.pnpm/@rollup+plugin-alias@5.0.0/node_modules/@rollup/plugin-alias/dist/es/index.js";
var __vite_injected_original_dirname = "/home/macimas/Desktop/github/macimas/macimas.github.io";
var vite_config_default = defineConfig({
  plugins: [
    svelte(),
    alias({
      entries: [
        { find: "lib", replacement: resolve(__vite_injected_original_dirname, "src/lib") }
      ]
    }),
    dynamicImport()
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9tYWNpbWFzL0Rlc2t0b3AvZ2l0aHViL21hY2ltYXMvbWFjaW1hcy5naXRodWIuaW9cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL21hY2ltYXMvRGVza3RvcC9naXRodWIvbWFjaW1hcy9tYWNpbWFzLmdpdGh1Yi5pby92aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS9tYWNpbWFzL0Rlc2t0b3AvZ2l0aHViL21hY2ltYXMvbWFjaW1hcy5naXRodWIuaW8vdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAncGF0aCc7XG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHsgc3ZlbHRlIH0gZnJvbSAnQHN2ZWx0ZWpzL3ZpdGUtcGx1Z2luLXN2ZWx0ZSc7XG5pbXBvcnQgZHluYW1pY0ltcG9ydCBmcm9tICd2aXRlLXBsdWdpbi1keW5hbWljLWltcG9ydCdcbmltcG9ydCBhbGlhcyBmcm9tICdAcm9sbHVwL3BsdWdpbi1hbGlhcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICBzdmVsdGUoKSxcbiAgICBhbGlhcyh7XG4gICAgICBlbnRyaWVzOiBbXG4gICAgICAgIHsgZmluZDogJ2xpYicsIHJlcGxhY2VtZW50OiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9saWInKX0sXG4gICAgICBdXG4gICAgfSksXG4gICAgZHluYW1pY0ltcG9ydCgpXG4gIF0sXG59KTsiXSwKICAibWFwcGluZ3MiOiAiO0FBQW9WLFNBQVMsZUFBZTtBQUM1VyxTQUFTLG9CQUFvQjtBQUM3QixTQUFTLGNBQWM7QUFDdkIsT0FBTyxtQkFBbUI7QUFDMUIsT0FBTyxXQUFXO0FBSmxCLElBQU0sbUNBQW1DO0FBTXpDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxJQUNQLE1BQU07QUFBQSxNQUNKLFNBQVM7QUFBQSxRQUNQLEVBQUUsTUFBTSxPQUFPLGFBQWEsUUFBUSxrQ0FBVyxTQUFTLEVBQUM7QUFBQSxNQUMzRDtBQUFBLElBQ0YsQ0FBQztBQUFBLElBQ0QsY0FBYztBQUFBLEVBQ2hCO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
