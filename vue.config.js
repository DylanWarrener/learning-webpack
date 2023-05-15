const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        data: `@import "./styles.scss";`,
      },
    },
  },
  // Delete the prefetch plugin
  chainWebpack: (config) => {
    config.plugins.delete("prefetch");
  },
});
