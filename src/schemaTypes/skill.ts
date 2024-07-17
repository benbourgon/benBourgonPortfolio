/* src/schemaTypes/skill.ts */
import { z } from "astro:content";

export const skill = z.object({
    label: z.string(),
    name: z.string(),
});
