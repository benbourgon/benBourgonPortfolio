import {z} from "astro:content";
import project from './project';
import skill from './skill';
export const schema = z.object({
  project,
  skill,
})
