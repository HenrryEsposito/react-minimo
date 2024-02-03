const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/app",
  output: {
    filename: "bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
    }),
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
};
