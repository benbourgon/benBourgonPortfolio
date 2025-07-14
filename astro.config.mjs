import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
    output: "static",
    site: "https://www.benbourgon.com",
    integrations: [icon(), sitemap()],
});
