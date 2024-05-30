/* src/schemaTypes/project.ts */
import { z, reference } from "astro:content";
import { link } from "./link.ts";
export const project = z.object({
  title: z.string(),
  image: z.object({
    url: z.string(),
    alt: z.string(),
  }),
  description: z.string(),
  techStack: z.array(reference("skills")),
  links: z.array(link),
});
