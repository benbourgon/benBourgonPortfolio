/* src/schemaTypes/skill.ts */
// biome-ignore lint/nursery/noUnresolvedImports: <biome does not support Astro imports>
import { z } from "astro:content";

export const skill = z.object({
    label: z.string(),
    name: z.string(),
});
