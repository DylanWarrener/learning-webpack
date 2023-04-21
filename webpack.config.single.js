const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
	mode: "development",
	devtool: "inline-source-map",
	// The entry file to start compilation
	entry: "./src/index.ts",
	output: {
		// Names the output file to bundle.js
		filename: "bundle.js",
		// Directs all compilation files to the dist folder
		path: path.resolve(__dirname, "dist"),
		// Not sure yet
		publicPath: "dist",
		// Cleans the dist folder on compilation
		clean: true,
	},
	devServer: {
		// Tells dev server where to serve files from
		static: {
			directory: path.join(__dirname, "dist"),
		},
		// Only show webpack errors, instead of a long console log message.
		stats: "errors-only",
		// Open a new browser when webpack dev server loads
		open: true,
		// GZIPS the files before serving them
		compress: true,
		// Shows a fullscreen overlay in the browser when there are compiler errors but not warnings
		client: {
			overlay: {
				errors: true,
				warnings: false,
			},
		},
		/*
		devMiddleware: {
			publicPath: "/",
			writeToDisk: true,
		},
        */
	},
	// Applies rules to each file type extension
	module: {
		rules: [
			// Applies to vue files
			{
				test: /\.vue$/,
				loader: "vue-loader",
				exclude: /node_modules/,
			},
			// Applies to both plain `.js` files
			// AND `<script>` blocks in `.vue` files
			{
				test: /\.js$/,
				loader: "babel-loader",
				exclude: /node_modules/,
			},
			// Applies to both plain `.ts` files
			// AND `<script lang="ts">` blocks in `.vue` files
			{
				test: /\.ts$/,
				loader: "ts-loader",
				options: { appendTsSuffixTo: [/\.vue$/] },
				exclude: /node_modules/,
			},
			// Applies to both plain `.css` or `.scss` files
			// AND <script lang="css"> or <script lang="scss"> blocks in `.vue` files
			{
				test: /\.css$/,
				use: ["vue-style-loader", "style-loader", "css-loader"],
			},
		],
	},
	resolve: {
		extensions: [".ts", ".js", ".vue"],
	},
	plugins: [
		// If multiple templates are needed, add HtmlWebpackPlugin multiple times
		new VueLoaderPlugin(),
		new HtmlWebpackPlugin({
			template: "src/index.html",
			title: "TPW Home Development",
			filename: "index.html",
			scriptLoading: "defer",
		}),
	],
};
