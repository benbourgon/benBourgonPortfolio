import eslintPluginAstro from "eslint-plugin-astro"
import parser from "astro-eslint-parser"
import eslint from "@eslint/js"
import tseslint from "typescript-eslint"

export default tseslint.config(
    {
        ignores: [
            "node_modules/*",
            "dist/*",
            "public/*",
            "build/*",
            "out/*",
            ".astro",
            ".cache/*",
            ".netlify/*",
            ".vercel/*",
            ".vite/*",
            ".yarn/*",
            "yarn.lock",
            "package-lock.json",
            "tsconfig.json",
            "postcss.config.mjs",
        ],
    },
    eslint.configs.recommended,
    ...tseslint.configs.strictTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
    {
        languageOptions: {
            parser: tseslint.parser,
            parser: parser,
            parserOptions: {
                project: ["./tsconfig.json"],
                tsconfigRootDir: import.meta.dirname,
                extraFileExtensions: [".astro"],
            },
        },
        ...eslintPluginAstro.configs.recommended,
        ...eslintPluginAstro.configs["jsx-a11y-strict"],
    }
)
