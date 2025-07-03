import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import yaml from "@rollup/plugin-yaml";
import { defineConfig, passthroughImageService } from "astro/config";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
    output: "static",
    site: "https://www.benbourgon.com",
    integrations: [icon(), mdx(), sitemap()],
    vite: {
        plugins: [yaml()],
    },
    image: {
        domains: ["res.cloudinary.com"],
        service: passthroughImageService(),
        provider: "cloudinary",
        dir: "images",
    },
});
