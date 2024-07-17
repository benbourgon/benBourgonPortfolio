/* src/schemaTypes/link.ts */
import { z } from "astro:content";
const linkLabel = z.union([z.literal("view live"), z.literal("GitHub repo")]);
export const link = z.object({
    label: linkLabel,
    url: z.string().url(),
});
