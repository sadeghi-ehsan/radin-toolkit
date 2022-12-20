module.exports = {
  stories: ["../src/components/**/**/*.stories.@(js|jsx|ts|tsx|mdx)"],
  addons: ["@storybook/addon-essentials", "@pxblue/storybook-rtl-addon/register"],
  core: {
    builder: "webpack5"
  }
};
