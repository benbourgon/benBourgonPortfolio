/* src/schemaTypes/project.ts */
import { z } from "astro/zod";
//biome-ignore lint: correctness/noUnresolvedImports: biome does not find astro imports
import { reference } from "astro:content";
import { link } from "./link.ts";
export const project = z.object({
  order: z.number(),
  title: z.string(),
  image: z.object({
    src: z.string().min(1),
    alt: z.string().min(1),
  }),
  description: z.string(),
  techStack: z.array(reference("skills")),
  links: z.array(link),
});
