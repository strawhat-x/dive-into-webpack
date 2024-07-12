import { realpathSync } from 'node:fs';
import path from 'node:path';

process.env.NODE_ENV = 'production';

const appDir = realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDir, relativePath);

export default {
  entry: resolveApp('src/index.js'),
  output: {
    clean: true,
    path: resolveApp('dist'),
    filename: '[name].[contenthash:8].umd.js',
    globalObject: 'this',
    library: {
      name: 'hell-world',
      type: 'umd',
    },
  },
  externals: {
    'lodash-es': {
      commonjs: 'lodash-es',
      commonjs2: 'lodash-es',
      amd: 'lodash-es',
      root: '_'
    }
  },
  optimization: {
    minimize: false,
  }
};
