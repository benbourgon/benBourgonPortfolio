/* src/schemaTypes/link.ts */
import { z } from "astro/zod";

const linkLabel = z.union([z.literal("view live"), z.literal("GitHub repo")]);
export const link = z.object({
  label: linkLabel,
  url: z.url(),
});
