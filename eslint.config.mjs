import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintPluginAstro from "eslint-plugin-astro";

export default [
    {
        ignores: ["node_modules", "dist", "build", ".astro/", "src/env.d.ts"],
    },
    {
        files: ["**/*.{js,mjs,cjs,ts,astro}"],
    },
    {
        languageOptions: { globals: globals.browser },
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    ...eslintPluginAstro.configs.recommended,
    ...eslintPluginAstro.configs["jsx-a11y-strict"],
];
