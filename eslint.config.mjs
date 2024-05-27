// @ts-check
import eslintPluginAstro from "eslint-plugin-astro";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    ignores: ["node_modules/*", "dist/*", "public/*", "build/*", "out/*", ".astro/*", ".cache/*", ".netlify/*", ".vercel/*", ".vite/*", ".yarn/*", "yarn.lock", "package-lock.json", "tsconfig.json", "eslint.config.mjs, *.cjs"]
  },
  ...tseslint.configs.stylisticTypeChecked,
  ...eslintPluginAstro.configs.recommended,
);
