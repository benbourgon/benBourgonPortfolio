// @ts-nocheck
module.exports = {
    plugins: [
        require("postcss-import"),
        require("postcss-url"),
        require("postcss-combine-duplicated-selectors")({
            removeDuplicatedProperties: true,
            removeDuplicatedValues: false,
        }),
        require("cssnano"),
        require("autoprefixer"),
        require("postcss-reporter"),
    ],
};
