const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
	entry: "./src/index.ts",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js",
		publicPath: "dist",
		clean: true,
	},
	devServer: {
		static: "dist",
		devMiddleware: {
			publicPath: "/",
			writeToDisk: true,
		},
	},
	module: {
		rules: [
			/* Deals with Typescript file extensions */
			{
				test: /\.ts$/i,
				use: "ts-loader",
				exclude: /node_modules/,
			},
			/* Deals with Vue file extensions */
			{
				test: /\.vue$/,
				loader: "vue-loader",
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js", ".vue"],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "src/index.html",
			title: "TPW Home Development",
			filename: "index.html",
			scriptLoading: "defer",
		}),
		new VueLoaderPlugin(),
	],
};
