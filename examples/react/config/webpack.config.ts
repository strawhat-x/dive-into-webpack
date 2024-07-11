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
