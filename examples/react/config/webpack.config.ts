import { realpathSync } from 'node:fs';
import path from 'node:path';
import { Configuration } from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';

const appDir = realpathSync(process.cwd());
const resolveApp = (relativePath = '.') => path.resolve(appDir, relativePath);
const paths = {
  appSrc: resolveApp('src'),
  appIndex: resolveApp('src/index.tsx'),
};

export default {
  entry: paths.appIndex,
  output: {
    path: resolveApp('dist'),
    filename: 'app.[contenthash:8].js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '...'],
  },
  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.(tsx|ts|jsx|js)$/,
            loader: 'babel-loader',
          },
        ],
      },
    ],
  },
  cache: {
    type: 'filesystem',
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: resolveApp('index.html'),
    }),
  ]
} as Configuration;
