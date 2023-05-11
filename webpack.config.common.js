// Node modules
const path = require("path");

// Plugins modules
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
	entry: {
		app: path.resolve(__dirname, "src/index.ts"),
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		publicPath: "/dist/",
		clean: true,
	},
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
	//devtool: "inline-source-map",
	// Applies rules to each file type extension
	module: {
		rules: [
			// Applies to both plain `.css` or `.scss` files
			// AND <script lang="css"> or <script lang="scss"> blocks in `.vue` files
			{
				test: /\.css$/,
				use: ["vue-style-loader", "css-loader"],
			},
			// Applies to vue files
			{
				test: /\.vue$/,
				loader: "vue-loader",
				exclude: /node_modules/,
			},
			// Applies to both plain `.ts` files
			// AND `<script lang="ts">` blocks in `.vue` files
			{
				test: /\.ts$/,
				loader: "ts-loader",
				options: {
					appendTsSuffixTo: [/\.vue$/],
				},
				exclude: /node_modules/,
			},
			// Applies to both plain `.js` files
			// AND `<script>` blocks in `.vue` files
			{
				test: /\.js$/,
				loader: "babel-loader",
				options: {
					presets: ["@babel/preset-env"],
				},
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: [".js", ".ts", ".vue"],
	},
	plugins: [
		new VueLoaderPlugin(),
		// If multiple templates are needed, add HtmlWebpackPlugin multiple times
		new HtmlWebpackPlugin({
			showErrors: true,
			cache: true,
			filename: "index.html",
			scriptLoading: "defer",
			title: "TPW Home Development",
			template: path.resolve(__dirname, "src/index.html"),
		}),
	],
};
