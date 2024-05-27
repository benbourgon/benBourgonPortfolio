import { z } from "astro:content";
const linkLabel = z.union([
  z.literal("view live"),
  z.literal("code on github"),
]);
const href = z.string().url();

const link = z.object({
  label: linkLabel,
  url: href,
});
export default link;
