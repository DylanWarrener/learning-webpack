// Node modules
const path = require("path");

// Plugins
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  mode: "development",
  entry: {
    app: path.resolve(__dirname, "src/index.ts"),
  },
  output: {
    // Output filename of initial chunk
    filename: "[name].bundle.js",
    // Output file name of non-initial chunk
    chunkFilename: "[name].chunk.bundle.js",
    // Path to output folder
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist/",
    // Clean output folder before sending new data to it
    clean: true,
  },
  devtool: "inline-source-map",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    open: true,
    compress: true,
    historyApiFallback: true,
    client: {
      overlay: true,
    },
  },
  // Applies rules to each file type extension
  module: {
    rules: [
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
      // Applies to vue files
      {
        test: /\.vue$/,
        loader: "vue-loader",
        exclude: /node_modules/,
      },
      // Applies to both plain `.scss` or `.sass` files
      // AND <script lang="scss"> or <script lang="sass"> blocks in `.vue` files
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "vue-style-loader",
          // Translates CSS into CommonJS
          {
            loader: "css-loader",
            options: { modules: true },
          },
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      // Applies to both plain `.css` files
      // AND <script lang="css"> blocks in `.vue` files
      {
        test: /\.css$/i,
        use: [
          // Creates `style` nodes from JS strings
          "vue-style-loader",
          // Translates CSS into CommonJS
          "css-loader",
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".ts", ".vue", "css", "scss"],
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
      template: path.join(__dirname, "src/index.html"),
    }),
    //new BundleAnalyzerPlugin({
    //  generateStatsFile: true,
    //}),
  ],
};
