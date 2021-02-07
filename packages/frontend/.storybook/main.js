const path = require("path");
module.exports = {
  stories: ["../src/stories/**/*.stories.@(tsx|mdx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-actions",
    "@storybook/addon-knobs",
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
  ],
  webpackFinal: async (config) => {
    // scssの読み込み対応
    // SOUCE
    // https://nebulab.it/blog/nextjs-tailwind-storybook/
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        "style-loader",
        "css-loader",
        "postcss-loader",
        // Add the sass loader to process scss files
        "sass-loader",
      ],
    });
    config.resolve.alias = {
      "@components": path.resolve(__dirname, "..", "src", "components"),
      "@styles": path.resolve(__dirname, "..", "src", "styles"),
      "@modules": path.resolve(__dirname, "..", "src", "modules"),
    };
    return config;
  },
};
