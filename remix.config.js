// const fsp = require('fs').promises;
// const path = require('path');

/**
 * @type {import('@remix-run/dev/config').AppConfig}
 */

module.exports = {
  appDirectory: 'app',
  assetsBuildDirectory: 'public/build',
  publicPath: '/build/',
  // serverBuildDirectory: 'api/_build',
  serverBuildDirectory: 'netlify/functions/server/build',
  devServerPort: 8002,
  ignoredRouteFiles: ['.*'],

  // custom routes
  routes: async (defineRoutes) => {
    const df = defineRoutes((route) => {
      //NESTED MEANS YOU ARE USING OUTLETS
      // route('/it', 'virtual/it/index.jsx', () => {
      //   route(`prodotti/:product`, `virtual/it/$product.jsx`);
      //   route(`articoli/:article`, `virtual/it/$article.jsx`);
      // });
      //THIS DOES NOT WORK, CAUSE ROUTEAS ARE MAPS PER FILE
      //eg virtual/$locale/$product.jsx -> only one path
      // route(`/:locale/prodotti/:product`, `virtual/$locale/$product.jsx`);
      // route(`/it/prodotti/:product`, `virtual/$locale/$product.jsx`);
      // route(`/fr/produits/:product`, `virtual/$locale/$product.jsx`);
      // route(`/de/produkte/:product`, `virtual/$locale/$product.jsx`);
      // route(`/it/articoli/:article`, `virtual/$locale/$article.jsx`);
      // route(`/fr/atricules/:article`, `virtual/$locale/$article.jsx`);
      // route(`/de/artikel/:article`, `virtual/$locale/$article.jsx`);

      // VERBOSE SOLUTION
      //IT
      route(`/it/prodotti/:product`, `virtual/it/$product.jsx`);
      route(`/it/articoli/:article`, `virtual/it/$article.jsx`);
      // route(`/it`, `virtual/it/index.jsx`);

      //FR
      route(`/fr/produits/:product`, `virtual/fr/$product.jsx`);
      route(`/fr/atricules/:article`, `virtual/fr/$article.jsx`);
      // route(`/fr`, `virtual/fr/index.jsx`);

      //DE
      route(`/de/produkte/:product`, `virtual/de/$product.jsx`);
      route(`/de/artikel/:article`, `virtual/de/$article.jsx`);
      // route(`/de`, `virtual/de/index.jsx`);

      //LANG
      route(`/:locale`, `virtual/$locale.jsx`);
    });
    console.log('DEFINED ROUTES', df);
    return df;
  },
};
