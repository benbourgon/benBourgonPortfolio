import { z, reference } from "astro:content";
import link from "./link.ts";
const project = z.object({
  title: z.string(),
  image: z.object({
    url: z.string(),
    alt: z.string(),
  }),
  description: z.string(),
  techStack: z.array(reference("skills")),
  links: z.array(link),
});

export default project;
