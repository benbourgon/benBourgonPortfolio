import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify";
import purgecss from "astro-purgecss";
import icon from "astro-icon";

import mdx from "@astrojs/mdx";
import yaml from '@rollup/plugin-yaml'

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: netlify(),
  site: "https://www.benbourgon.com",
  integrations: [purgecss(), icon(), mdx()],
  vite: {
    plugins: [yaml()]
  }
});
