// content.config.ts
// biome-ignore lint/nursery/noUnresolvedImports: <biome does not support Astro imports>
import { defineCollection } from "astro:content";
import { glob } from 'astro/loaders';
/* Import schema definitions */
import { aboutSection, navItem, project, siteSettings, skill } from "./schemaTypes/index.ts";

/* Define a loader and a schema for each content type*/
const projects = defineCollection({
    loader: glob({ pattern: "*.md", base: "./src/content/projects/" }),
    schema: project,
});
const skills = defineCollection({
    loader: glob({ pattern: "*.md", base: "./src/content/skills/" }),
    schema: skill,
});
const navItems = defineCollection({
    loader: glob({ pattern: "*.md", base: "./src/content/navItems/" }),
    schema: navItem,
});
const settings = defineCollection({
    loader: glob({ pattern: "site-settings.json", base: "./src/content/settings/" }),
    schema: siteSettings,
});
const about = defineCollection({
    loader: glob({ pattern: "index.md", base: "./src/content/about/" }),
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
