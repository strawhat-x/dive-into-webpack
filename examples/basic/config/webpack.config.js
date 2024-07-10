import { realpathSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// current dirname
const __dirname = fileURLToPath(new URL('.', import.meta.url));
// node cwd( current working directory ), where the command executed.
const appDir = realpathSync(process.cwd());
const resolveApp = (relativePath = '.') => path.resolve(appDir, relativePath);

console.warn('__dirname', __dirname);
console.warn('appDir', appDir);

/** ******* single entry, short hand ******* */
export default {
  entry: './src/index.js',
  output: {
    clean: true,
  },
  optimization: {
    minimize: false,
  },
};

/** ******* multiple entries generate one file ******* */
// export default {
//   entry: ['./src/foo.js', './src/bar.js'],
// }

/** ******* multiple entries generate multiple files ******* */
// export default {
//   entry: {
//     foo: './src/foo.js',
//     bar: './src/bar.js'
//   }
// }

/** ******* with output ******* */
// export default {
//   entry: {
//     foo: './src/foo.js',
//     bar: './src/bar.js',
//   },
//   output: {
//     clean: true,
//     path: resolveApp('dist'),
//     filename: '[name].[contenthash:8].js'
//   }
// };
