const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const autoprefixer = require("autoprefixer");
// const ChromeExtensionReloader = require('webpack-chrome-extension-reloader'); // enable hot reloading while developing a chrome extension

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: {
    app: './src/app/index.js',
    background: './src/extension/build/background.js',
    content: './src/extension/build/content_script.js',
    script: './src/extension/build/script.js',
    // backend: './src/backend/index.ts',
  },
  output: {
    path: path.resolve(__dirname, 'src/extension/build'),
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
          loader: 'babel-loader',
        },
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
            // the "scss" and "sass" values for the lang attribute to the right configs here.
            // other preprocessors should work out of the box, no loader config like this nessessary.
            scss: 'vue-style-loader!css-loader!sass-loader',
            sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
          },
          // other vue-loader options go here
        },
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader'],
      },
      // {
      //   test: /\.s?css$/,
      //   use: [
      //     "style-loader",
      //     MiniCssExtractPlugin.loader,
      //     "css-loader",
      //     {
      //       loader: "postcss-loader",
      //       options: {
      //         plugins: () => [autoprefixer()],
      //       },
      //     },
      //     "sass-loader",
      //   ],
      // },
      // {
      //   test: /\.module\.s(a|c)ss$/,
      //   loader: [
      //     isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
      //     {
      //       loader: 'css-loader',
      //       options: {
      //         modules: true,
      //         sourceMap: isDevelopment,
      //       },
      //     },
      //     {
      //       loader: 'sass-loader',
      //       options: {
      //         sourceMap: isDevelopment,
      //       },
      //     },
      //   ],
      // },
      // {
      //   test: /\.s(a|c)ss$/,
      //   exclude: /\.module.(s(a|c)ss)$/,
      //   loader: [
      //     isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
      //     'css-loader',
      //     {
      //       loader: 'sass-loader',
      //       options: {
      //         sourceMap: isDevelopment,
      //       },
      //     },
      //   ],
      // },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    // new MiniCssExtractPlugin(),
    new MiniCssExtractPlugin({
      filename: isDevelopment ? '[name].css' : '[name].[hash].css',
      chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css',
    }),
  ],
  // resolve: {
  //   //   alias: {
  //   //     vue$: "vue/dist/vue.runtime.esm.js",
  //   //   },
  //   //   extensions: ["*", ".js", ".vue", ".json"],
  //   extensions: ['.js', '.jsx', '.scss'],
  // },
};
