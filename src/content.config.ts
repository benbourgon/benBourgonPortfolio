// src/content.config.ts
import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
/* Import schema type definitions */
import { project, skill, navItem, siteSettings, aboutSection } from "./schemaTypes/index";

const projects = defineCollection({
    loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/projects" }),
    schema: project,
});
const skills = defineCollection({
    loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/skills" }),
    schema: skill,
});
const navItems = defineCollection({
    loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/navItems" }),
    schema: navItem,
});
const settings = defineCollection({
    loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/settings" }),
    schema: siteSettings,
});
const about = defineCollection({
    loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/about" }),
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
