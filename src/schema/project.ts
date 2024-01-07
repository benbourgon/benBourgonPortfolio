import { z, reference } from 'astro:content';

const project = z.object({
  title: z.string(),
  image: z.object({
    url: z.string(),
    alt: z.string(),
  }),
  description: z.string(),
  techStack: reference('skill'),
  links: reference('link'),
});

export default project;
