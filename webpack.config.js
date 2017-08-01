const webpack = require("webpack");

module.exports = {
  entry: {
    a: ["./a.js"]
  },
  output: {
    path: `${__dirname}/build`,
    filename: "[name].js",
    library: "[name]",
    libraryTarget: "amd"
  },
  plugins: [
    new webpack.DllPlugin({
      path: `${__dirname}/manifests/a.manifest.js`,
      name: "[name]"
    })
  ]
};
