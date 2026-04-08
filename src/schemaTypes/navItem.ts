/* src/schemaTypes/navItem.ts */

import { z } from "astro/zod";
export const navItem = z.object({
  content: z.string(),
  href: z.union([z.url(), z.string().startsWith("#")]),
  icon: z.string().startsWith("lucide:"),
  order: z.number(),
});
