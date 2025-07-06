// biome-ignore lint/nursery/noUnresolvedImports: <biome does not support Astro imports>
import { z } from "astro:content";

export const aboutSection = z.object({
    title: z.string().min(1),
    preamble: z.string().min(1),
    image: z.object({
        alt: z.string().min(1),
    }),
    flow: z.object({
        heading: z.string(),
        content: z.array(z.string()),
    }),
});
