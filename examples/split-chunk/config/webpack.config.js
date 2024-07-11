import { realpathSync } from 'node:fs';
import path from 'node:path';
import HTMLWebpackPlugin from 'html-webpack-plugin';

process.env.NODE_ENV = 'production';

const appDir = realpathSync(process.cwd());
const resolveApp = (relative = '.') => path.resolve(appDir, relative);

export default {
  entry: {
    app1: resolveApp('src/app1'),
    app2: resolveApp('src/app2'),
    done: resolveApp('src/done'),
    active: resolveApp('src/active'),
    create: resolveApp('src/create'),
  },
  output: {
    clean: true,
    path: resolveApp('build'),
    filename: '[name].[contenthash:8].js',
  },
  module: {
    rules: [{
      test: /\.js$/,
      resolve: {
        fullySpecified: false,
      }
    }]
  },
  plugins: [
    new HTMLWebpackPlugin({
      path: resolveApp('build'),
      title: 'webpack split chunk',
      filename: 'index.html'
    })
  ],
  optimization: {
    minimize: false,
    runtimeChunk: 'single',
  }
};
