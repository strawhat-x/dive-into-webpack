import { realpathSync } from 'node:fs';
import path from 'node:path';

process.env.NODE_ENV = 'production';

const appDir = realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDir, relativePath);

export default {
  entry: resolveApp('src/index.js'),
  output: {
    path: resolveApp('dist'),
    filename: '[name].[contenthash:8].umd.js',
    library: {
      name: 'hell-world',
      type: 'umd',
    },
  },
  optimization: {
    minimize: false,
  }
};
