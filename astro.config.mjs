import { defineConfig, passthroughImageService, envField } from "astro/config";
import purgecss from "astro-purgecss";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import critters from "astro-critters";

// https://astro.build/config
export default defineConfig({
    output: "static",
    site: "https://www.benbourgon.com",
    integrations: [purgecss(), icon(), mdx(), sitemap(), critters()],
    image: {
        domains: ["res.cloudinary.com"],
        service: passthroughImageService(),
        provider: "cloudinary",
        dir: "images",
    },
    env: {
        schema: {
            CLOUDINARY_CLOUD_NAME: envField.string({
                context: "server",
                access: "secret",
            }),
        },
    },
});
