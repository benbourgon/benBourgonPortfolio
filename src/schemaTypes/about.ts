import { z } from "astro:content";

export const aboutSection = z.object({
    title: z.string().min(1),
    preamble: z.string().min(1),
    image: z.object({
        src: z.string().min(1),
        alt: z.string().min(1),
    }),
    flow: z.object({
        heading: z.string(),
        content: z.array(z.string()),
    }),
});
