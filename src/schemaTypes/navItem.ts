/* src/schemaTypes/navItem.ts */
// biome-ignore lint/nursery/noUnresolvedImports: <biome does not support Astro imports>
import { z } from "astro:content";
export const navItem = z.object({
    content: z.string(),
    href: z.union([z.string().url(), z.string().startsWith("#")]),
    icon: z.string().startsWith("lucide:"),
    order: z.number(),
});
