// Third party modules
const { merge } = require("webpack-merge");

// Paths to webpack common, dev & prod
const commonConfig = require("./webpack.config.common.js");
const devConfig = require("./webpack.config.dev.js");
const prodConfig = require("./webpack.config.prod.js");

module.exports = (env, args) => {
	console.log(args);
	switch (args.mode) {
		case "development":
			return merge(commonConfig, devConfig);
		case "production":
			return merge(commonConfig, prodConfig);
		default:
			return commonConfig;
	}
};
