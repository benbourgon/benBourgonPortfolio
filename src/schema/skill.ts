import { z } from 'astro:content';

const skill = z.object(
  {
    name: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
  },
  { strict: false }
  );

export default skill;
