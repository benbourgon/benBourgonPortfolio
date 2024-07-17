/* src/schemaTypes/navItem.ts */
import { z } from "astro:content";
export const navItem = z.object({
    content: z.string(),
    href: z.union([z.string().url(), z.string().startsWith("#")]),
    icon: z.string().startsWith("lucide:"),
});
