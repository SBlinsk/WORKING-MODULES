const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    filename: path.resolve(__dirname, "src/Chat.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.[hash].js",
  },
  mode: "development",
  plugins: [new CleanWebpackPlugin(), new HtmlWebpackPlugin()],
};
