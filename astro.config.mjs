import sitemap from "@astrojs/sitemap";
import {
  defineConfig,
  fontProviders,
  passthroughImageService,
} from "astro/config";
import icon from "astro-icon";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  output: "static",
  site: "https://www.benbourgon.com",
  image: {
    service: passthroughImageService(),
  },
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Montserrat",
      cssVariable: "--font-montserrat",
    },
    {
      provider: fontProviders.fontsource(),
      name: "Playfair Display",
      cssVariable: "--font-playfair-display",
    },
  ],

  integrations: [icon(), sitemap()],
  adapter: cloudflare({
    imageService: {
      service: "passthrough",
    },
  }),
});
