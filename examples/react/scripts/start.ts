import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import chalk from 'chalk';
import config from '../config/webpack.config';

process.env.NODE_ENV = 'development';
process.env.BABEL_ENV = 'development';

// webpack(config, (err, stats) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   if (stats?.hasErrors) {
//     console.log(
//       stats.toString({
//         chunks: false,
//         colors: true,
//       })
//     );
//   }
// });

const compiler = webpack(config);

const devServer = new WebpackDevServer({
  client: {
    overlay: {
      warnings: false,
    }
  }
}, compiler);

devServer.start();
