// biome-ignore lint/nursery/noUnresolvedImports: <biome does not support Astro imports>
import { z } from "astro:content";
export const siteSettings = z.object({
    siteTitle: z.string(),
    firstName: z.string(),
    lastName: z.string(),
    subtitle: z.string(),
});
