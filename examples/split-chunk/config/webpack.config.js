import { realpathSync } from 'node:fs';
import path from 'node:path';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

process.env.NODE_ENV = 'production';

const appDir = realpathSync(process.cwd());
const resolveApp = (relative = '.') => path.resolve(appDir, relative);

export default {
  entry: {
    app1: resolveApp('src/app1'),
    app2: resolveApp('src/app2'),
  },
  output: {
    clean: true,
    path: resolveApp('build'),
    filename: '[name].[contenthash:8].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        resolve: {
          fullySpecified: false,
        },
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      path: resolveApp('build'),
      title: 'webpack split chunk',
      filename: 'index.html',
      chunks: ['app1']
    }),
    new HTMLWebpackPlugin({
      path: resolveApp('build'),
      title: 'webpack split chunk app2',
      filename: 'app2.html',
      chunks: ['app2']
    }),
    new BundleAnalyzerPlugin()
  ],
  optimization: {
    moduleIds: 'deterministic',
    minimize: false,
    runtimeChunk: 'single',
    splitChunks: {
      minSize: 1,
      minRemainingSize: 0,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      automaticNameDelimiter: '-',
      enforceSizeThreshold: 1,
      cacheGroups: {
        common: {
          test: /\/node_modules\//,
          priority: -5,
          reuseExistingChunk: true,
          chunks: 'initial',
          name: 'common',
          minSize: 0,
        },
        default: {
          name: "default",
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
          chunks: 'initial',
        },
        reactPackage: {
          test: /\/node_modules\/(react|react-dom|react-router|react-router-dom)\//,
          name: 'react',
          chunks: 'all',
          priority: 10,
        },
      },
    },
  },
};
