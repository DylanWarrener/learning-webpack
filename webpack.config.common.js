const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
	entry: "./src/index.ts",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"),
		publicPath: "dist",
		clean: true,
	},
	devServer: {
		static: "dist",
		stats: "errors-only",
		devMiddleware: {
			publicPath: "/",
			writeToDisk: true,
		},
	},
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
		extensions: [".js", ".ts", ".tsx", ".vue"],
	},
	plugins: [
		// If multiple templates are needed, add HtmlWebpackPlugin multiple times
		new HtmlWebpackPlugin({
			template: "src/index.html",
			title: "TPW Home Development",
			filename: "index.html",
			scriptLoading: "defer",
		}),
		new VueLoaderPlugin(),
	],
};
