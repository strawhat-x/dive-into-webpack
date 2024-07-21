import { realpathSync } from 'node:fs';
import path from 'node:path';

process.env.NODE_ENV = 'development';

const appDir = realpathSync(process.cwd());
const resolveApp = (relative) => path.resolve(appDir, relative);

export default {
  entry: resolveApp('src/index.js'),
  output: {
    clean: {
      keep: (asset) => !asset.endsWith('umd.js'),
    },
    path: resolveApp('dist'),
    filename: '[name].[contenthash:8].umd.js',
    globalObject: 'this',
    library: {
      name: 'MyLibrary',
      type: 'umd',
    },
  },
  externals: {
    'lodash-es': {
      commonjs: 'lodash-es',
      commonjs2: 'lodash-es',
      amd: 'lodash-es',
      root: '_',
    }
  }
};
