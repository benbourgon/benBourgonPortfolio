// biome-ignore lint/nursery/noUnresolvedImports: <biome does not support Astro imports>
import { defineCollection } from "astro:content";
/* Import schema definitions */
import { aboutSection, navItem, project, siteSettings, skill } from "../schemaTypes/index.ts";

/* Define a `type` and `schema` for each collection */
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
const settings = defineCollection({
    type: "data",
    schema: siteSettings,
});
const about = defineCollection({
    type: "data",
    schema: aboutSection,
});
// Export a single `collections` object to register your collections
export const collections = {
    projects,
    skills,
    navItems,
    settings,
    about,
};
