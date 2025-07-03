/* src/schemaTypes/link.ts */
// biome-ignore lint/nursery/noUnresolvedImports: <biome does not support Astro imports>
import { z } from "astro:content";

const linkLabel = z.union([z.literal("view live"), z.literal("GitHub repo")]);
export const link = z.object({
    label: linkLabel,
    url: z.string().url(),
});
