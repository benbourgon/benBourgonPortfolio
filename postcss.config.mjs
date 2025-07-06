/** @type {import('postcss-load-config').Config} */
import postCSSUrl from "postcss-url";
import postCSSImport from "postcss-import";
import postCSSCombineDuplicatedSelectors from "postcss-combine-duplicated-selectors";
import cssnano from "cssnano";
import autoprefixer from "autoprefixer";
import postCSSReporter from "postcss-reporter";
const config = {
    plugins: [
        postCSSImport(),
        autoprefixer(),
        cssnano(),
        postCSSUrl(),
        postCSSCombineDuplicatedSelectors({
            removeDuplicatedProperties: true,
            removeDuplicatedValues: false,
        }),
        postCSSReporter(),
    ],
};
export default config;
