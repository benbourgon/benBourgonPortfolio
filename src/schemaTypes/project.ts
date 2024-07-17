/* src/schemaTypes/project.ts */
import { z, reference } from "astro:content";
import { link } from "./link.ts";
export const project = z.object({
    title: z.string(),
    image: z.object({
        src: z.string().min(1),
        alt: z.string().min(1),
    }),
    description: z.string(),
    techStack: z.array(reference("skills")),
    links: z.array(link),
});
