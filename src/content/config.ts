/* Import utilities from `astro:content` */
import { defineCollection } from "astro:content";
/* Import schema definitions */
import schemaGroup from "../schema/schema.ts";

/* 2. Define a `type` and `schema` for each collection */
const projects = defineCollection({
  type: "data",
  schema: schemaGroup.shape.project,
});
const skills = defineCollection({
  type: "data",
  schema: schemaGroup.shape.skill,
});

// 3. Export a single `collections` object to register your collections
export const collections = {
  projects: projects,
  skills: skills,
};
