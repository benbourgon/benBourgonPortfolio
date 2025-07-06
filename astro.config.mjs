import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import yaml from "@rollup/plugin-yaml";
import { defineConfig, envField } from "astro/config";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
    output: "static",
    site: "https://www.benbourgon.com",
    integrations: [icon(), mdx(), sitemap()],
    vite: {
        plugins: [yaml()],
    },
    env: {
      schema: {
        PUBLIC_CLOUDINARY_CLOUD_NAME: envField.string({
          context: "client",
          access: "public",
        }),
      }
    },
});
