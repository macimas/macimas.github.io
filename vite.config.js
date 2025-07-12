import path from "node:path";
import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

export default defineConfig({
	plugins: [
		svelte({
			onwarn(warning, handler) {
				const warnings = [
					"a11y_no_noninteractive_element_interactions",
					"a11y_no_static_element_interactions",
					"a11y_click_events_have_key_events",
					"a11y_missing_attribute"
				];

				if (warnings.includes(warning.code)) {
					return;
				}

				handler(warning);
			}
		})
	],
	resolve: {
		alias: [
			{
				find: "libs",
				replacement: path.join(import.meta.dirname, "src", "libs")
			},
			{
				find: "bits",
				replacement: path.join(import.meta.dirname, "src", "bits")
			},
			{
				find: "assets",
				replacement: path.join(import.meta.dirname, "src", "assets")
			},
			{
				find: "@",
				customResolver(source, importer) {
					source = source.split("/");
					importer = importer.split("/");

					source.shift();

					const index = importer.lastIndexOf("designs");

					if (!index) {
						return;
					}

					importer = importer.slice(index - 1, index + 2);

					return path.join(import.meta.dirname, ...importer, ...source);
				}
			}
		]
	},
	define: {
		__LAST_UPDATED__: JSON.stringify(Date.now())
	}
})
