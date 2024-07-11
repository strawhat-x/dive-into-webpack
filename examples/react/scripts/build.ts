import webpack from 'webpack';
import createConfig from '../config/webpack.config';


const PRO_ENV = 'production';
process.env.NODE_ENV = PRO_ENV;
process.env.BABEL_ENV = PRO_ENV;

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

webpack(createConfig(PRO_ENV), (err) => {
  if (err) {
    console.log(err);
  }
});
