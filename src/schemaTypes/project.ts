/* src/schemaTypes/project.ts */
// biome-ignore lint/nursery/noUnresolvedImports: <biome does not support Astro imports>
import { reference, z } from "astro:content";
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
