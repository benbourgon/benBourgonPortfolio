import sitemap from "@astrojs/sitemap";
import { defineConfig, fontProviders } from "astro/config";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  output: "static",
  site: "https://www.benbourgon.com",
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
});
