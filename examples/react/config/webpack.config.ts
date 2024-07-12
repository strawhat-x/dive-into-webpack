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

export default function (env: string) {
  const isProduction = env === 'production';

  return {
    mode: env,
    entry: {
      app: paths.appIndex,
    },
    output: {
      clean: true,
      path: resolveApp('dist'),
      filename: isProduction ? '[name].[contenthash:8].js' : '[name].js',
    },
    resolve: {
      extensions: ['.ts', '.tsx', '...'],
    },
    optimization: {
      minimize: false,
      runtimeChunk: 'single',
      splitChunks: {
        minSize: 17000,
        minRemainingSize: 0,
        minChunks: 1,
        maxAsyncRequests: 30,
        maxInitialRequests: 30,
        automaticNameDelimiter: '_',
        enforceSizeThreshold: 30000,
        cacheGroups: {
          common: {
            test: /[\\/]node_modules[\\/]/,
            priority: -5,
            reuseExistingChunk: true,
            chunks: 'initial',
            name: 'common_app',
            minSize: 0,
          },
          // default: {
          //   minChunks: 2,
          //   priority: -20,
          //   reuseExistingChunk: true,
          // },
          // we are opting out of defaultVendors, so rest of the node modules will be part of default cacheGroup
          defaultVendors: false,
          reactPackage: {
            test: /[\\/]node_modules[\\/](react|react-dom|react-router|react-router-dom)[\\/]/,
            name: 'vendor_react',
            chunks: 'all',
            priority: 10,
          },
        },
      },
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
    ],
  } as Configuration;
}
