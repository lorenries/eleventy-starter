const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");

const isDev = process.env.NODE_ENV === "development";
const baseFilename = isDev ? "[name]" : "[name].[contenthash]";

module.exports = {
  context: __dirname,
  mode: isDev ? "development" : "production",
  entry: {
    index: [
      path.resolve("./src/assets/js/index.ts"),
      path.resolve("./src/assets/css/index.css"),
    ],
  },
  output: {
    path: path.resolve(__dirname, "dist/assets"),
    filename: `${baseFilename}.js`,
  },
  optimization: {
    minimizer: [new TerserPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
        options: {
          transpileOnly: true,
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
    ],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      eslint: {
        files: "./src/assets/js/*.{ts,js}",
      },
    }),
    new MiniCssExtractPlugin({ filename: `${baseFilename}.css` }),
    new WebpackManifestPlugin({ publicPath: "/assets/" }),
  ],
};
