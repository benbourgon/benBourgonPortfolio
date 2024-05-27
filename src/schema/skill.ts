import { z } from "astro:content";

const skill = z.object({
  label: z.string(),
  name: z.string(),
});
export default skill;
