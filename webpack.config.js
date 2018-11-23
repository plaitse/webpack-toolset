const miniCssExtractPlugin = require('mini-css-extract-plugin')
const optimizeCssAssets = require("optimize-css-assets-webpack-plugin");
const path = require("path");

module.exports = (env, {mode}) => ({
  mode,
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./public"),
    filename: "./bundle.js"
  },
  devServer: {
    contentBase: path.resolve(__dirname, "./public"),
    historyApiFallback: true,
    host: 'localhost',
    hot: true,
    // https: true, // needs a SSL certificate
    inline: true,
    open: true,
    port: 5000
  },
  devtool: "source-map", // provides debugging info in the browser's console
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader"
    },
    {
      test: /\.(css|sass|scss)$/,
      loaders: [
        { loader: mode === 'production' ? miniCssExtractPlugin.loader : 'style-loader' },
        { loader: 'css-loader' },
        { loader: 'postcss-loader' },
        { loader: 'sass-loader' },
      ]
    }]
  },
  plugins: [
    new miniCssExtractPlugin({
      filename: 'styles.css',
      chunkFilename: '[id].css',
      allChunks: true,
    }),
    new optimizeCssAssets()
  ]
});
