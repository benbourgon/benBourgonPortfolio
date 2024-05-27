import { z } from "astro:content";
import project from "./project";
import skill from "./skill";
const schema = z.object({
  project,
  skill,
});
export default schema;
