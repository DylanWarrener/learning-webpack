// Common config
const common = require("./webpack.config.common.js");

// Third party modules
const { merge } = require("webpack-merge");

module.exports = merge(common, {
	mode: "development",
	devtool: "inline-source-map",
});
