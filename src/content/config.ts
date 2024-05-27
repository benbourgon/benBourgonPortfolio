/* Import utilities from `astro:content` */
import { defineCollection } from "astro:content";
/* Import schema definitions */
import { project, skill, navItem } from "../schemaTypes/";

/* 2. Define a `type` and `schema` for each collection */
const projects = defineCollection({
  type: "data",
  schema: project,
});
const skills = defineCollection({
  type: "data",
  schema: skill,
});
const navItems = defineCollection({
  type: "data",
  schema: navItem,
});
// 3. Export a single `collections` object to register your collections
export const collections = {
  projects: projects,
  skills: skills,
  navItems: navItems,
};
