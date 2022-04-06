// const fsp = require('fs').promises;
// const path = require('path');

/**
 * @type {import('@remix-run/dev/config').AppConfig}
 */

module.exports = {
  appDirectory: 'app',
  assetsBuildDirectory: 'public/build',
  publicPath: '/build/',
  serverBuildDirectory: 'api/_build',
  // serverBuildDirectory: "netlify/functions/server/build",
  // devServerPort: 8002,
  ignoredRouteFiles: ['.*'],

  // custom routes
  routes: async (defineRoutes) => {
    return defineRoutes((route) => {
      route(`/:locale/prodotti/:product`, `pages/$locale/$product.jsx`);
      route(`/:locale/produits/:product`, `pages/$locale/$product.jsx`);
      route(`/:locale/produkte/:product`, `pages/$locale/$product.jsx`);
      route(`/:locale/articoli/:article`, `pages/$locale/$article.jsx`);
      route(`/:locale/atricules/:article`, `pages/$locale/$article.jsx`);
      route(`/:locale/artikel/:article`, `pages/$locale/$article.jsx`);
      route(`/:locale`, `pages/$locale/index.jsx`);

      // route('/:locale', 'pages/$locale/index.jsx', () => {
      //   route(`prodotti/*`, `pages/$locale/$product.jsx`);
      //   route(`articoli/*`, `pages/$locale/$article.jsx`);
      // });
    });
  },
};
