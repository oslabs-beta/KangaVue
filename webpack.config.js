const path = require('path');
const { VueLoaderPlugin } = require("vue-loader");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require("autoprefixer");
// const ChromeExtensionReloader = require('webpack-chrome-extension-reloader'); // enable hot reloading while developing a chrome extension

module.exports = {
  entry: {
    app: './src/app/index.js',
    // background: './src/extension/background.js',
    // content: './src/extension/contentScript.ts',
    // backend: './src/backend/index.ts',
  },
  output: {
    path: path.resolve(__dirname, 'src/extension/build/bundles'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.txt$/,
        use: 'raw-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.s?css$/,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              plugins: () => [autoprefixer()],
            },
          },
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin(),
  ],
  // resolve: {
  //   alias: {
  //     vue$: "vue/dist/vue.runtime.esm.js",
  //   },
  //   extensions: ["*", ".js", ".vue", ".json"],
  // },
};
