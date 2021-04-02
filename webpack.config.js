const path = require('path');
const ChromeExtensionReloader = require('webpack-chrome-extension-reloader'); // enable hot reloading while developing a chrome extension


const config = {
  entry: {
    app: './src/app/index.tsx',
    background: './src/extension/background.js',
    content: './src/extension/contentScript.ts',
    backend: './src/backend/index.ts',
  },
  output: {
    path: path.resolve(__dirname, 'src/extension/build/bundles'),
    filename: '[name].bundle.js',
  },
};
