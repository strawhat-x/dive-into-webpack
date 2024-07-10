import { realpathSync } from 'node:fs';
import path from 'node:path';

process.env.NODE_ENV = 'development';

const appDir = realpathSync(process.cwd());
const resolveApp = (relativePath = '.') => path.resolve(appDir, relativePath);

export default {
  entry: resolveApp('src/index.js'),
  output: {
    path: resolveApp('dist'),
    filename: '[name].[contenthash:8].cmd.js',
    library: {
      name: 'MyLibrary',
      type: 'commonjs2',
    },
  },
}
