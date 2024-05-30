import { defineConfig } from "astro/config"
import purgecss from "astro-purgecss"
import icon from "astro-icon"
import mdx from "@astrojs/mdx"
import yaml from "@rollup/plugin-yaml"

// https://astro.build/config
export default defineConfig({
    output: "static",
    site: "https://www.benbourgon.com",
    integrations: [purgecss(), icon(), mdx()],
    vite: {
        plugins: [yaml()],
    },
})
