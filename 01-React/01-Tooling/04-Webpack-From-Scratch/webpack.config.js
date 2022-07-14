const path = require('path');

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  rules: [
    { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js"
  },
  devtool: "source-map"
};
