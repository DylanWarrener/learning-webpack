// Node modules
const path = require("path");

module.exports = {
	mode: "development",
	output: {
		filename: "[name].bundle.js",
	},
	devtool: "inline-source-map",
	devServer: {
		static: {
			directory: path.resolve(__dirname, "dist"),
		},
		open: true,
		compress: true,
		client: {
			overlay: true,
		},
	},
};
