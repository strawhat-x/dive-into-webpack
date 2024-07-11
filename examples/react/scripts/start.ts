import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import createConfig from '../config/webpack.config';


const DEV_ENV = 'development';
process.env.NODE_ENV = DEV_ENV;
process.env.BABEL_ENV = DEV_ENV;

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

const compiler = webpack(createConfig(DEV_ENV));

const devServer = new WebpackDevServer({
  client: {
    overlay: {
      warnings: false,
    }
  }
}, compiler);

devServer.start();
