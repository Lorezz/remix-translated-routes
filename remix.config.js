const fsp = require('fs').promises;
const path = require('path');

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
    // const json = await fsp.readFile('./data/paths.json', 'utf8');
    // const paths = JSON.parse(json);
    // console.log('paths', paths);
    return defineRoutes((route) => {
      route(`/products/:product`, `routes/products/$product.jsx`);
      route(`/articles/:article`, `routes/articles/$article.jsx`);
      route(`/prodotti/:product`, `routes/products/$product.jsx`);
      route(`/articoli/:article`, `routes/articles/$article.jsx`);

      // for (let page of paths) {
      //   const { source, dest, item } = page;
      //   route(`${source}`, `routes/${dest}`, { params: item });
      // }
      // route(`/it`, `routes/index.jsx`, { index: true, locale: 'it' });
      // route(`/`, `routes/index.jsx`, { index: true, locale: 'en' });
    });
  },
};
