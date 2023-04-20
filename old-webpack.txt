const path = require("path");
//const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: "./src/index.js",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"),
	},
	devtool: "inline-source-map",
	devServer: {
		static: "dist",
		devMiddleware: {
			publicPath: "/dist/",
			writeToDisk: true,
		},
	},
	module: {
		rules: [
			// Deals with ts
			{
				test: /\.ts$/i,
				use: "ts-loader",
				exclude: /node_modules/,
			},
			// Deals with css
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
				exclude: /node_modules/,
			},
			//Deals with images
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: "asset/resource",
			},
			/*
			// Deals with fonts
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: "asset/resource",
			},
			// Deals with csv and tsv files
			{
				test: /\.(csv|tsv)$/i,
				use: ["csv-loader"],
			},
			// Deals with xml files
			{
				test: /\.xml$/i,
				use: ["xml-loader"],
			},
            */
		],
	},
	/*
    plugins: [
		new HtmlWebpackPlugin({
			title: "Development",
		}),
	],
     */
	resolve: {
		extensions: [".ts", ".js"],
	},
};
