const path = require("path");

module.exports = {
  mode: 'development',
  entry: "./src/js/app.js",
  output: {
    path: path.resolve(__dirname, "public/js"),
    filename: "bundle.js"
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["babel-preset-env"]
          }
        }
      }
    ]
  }
};
