/* Import utilities from `astro:content` */
import { defineCollection } from "astro:content";
/* Import schema definitions */
import { project, skill, navItem, siteSettings, aboutSection } from "../schemaTypes/";

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
