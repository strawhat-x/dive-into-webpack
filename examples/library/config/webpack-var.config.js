import { realpathSync } from 'node:fs';
import path from 'node:path';
import HTMLWebpackPlugin from 'html-webpack-plugin';

process.env.NODE_ENV = 'production';

const appDir = realpathSync(process.cwd());
const resolveApp = (relativePath = '.') => path.resolve(appDir, relativePath);

export default {
  entry: resolveApp('src/index.js'),
  output: {
    path: resolveApp('dist'),
    filename: '[name].[contenthash:8].var.js',
    library: {
      name: 'MyLibrary',
      type: 'var',
    },
  },
  optimization: {
    minimize: false,
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: resolveApp('index.html'),
    })
  ]
};
