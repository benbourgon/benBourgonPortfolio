import {z} from 'astro:content';
const viewLive = z.literal("view live");
const codeOnGithub = z.literal("code on github");
const linkLabel = z.union([viewLive, codeOnGithub]);
const url = z.string().url();

export const link = z.map(
  linkLabel, url
);
