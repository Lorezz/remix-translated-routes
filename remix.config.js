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
  routes(defineRoutes) {
    return defineRoutes((route) => {
      //TRANSLATED ROUTES
      // route(
      //   '/en/categories/:category',
      //   'routes/$locale/categories/$category.jsx'
      // );
      // route('/en/products/:product', 'routes/$locale/products/$product.jsx');
      route(
        '/it/categorie/:category',
        'routes/$locale/categories/$category.jsx'
      );
      route('/it/prodotti/:product', 'routes/$locale/products/$product.jsx');
      //
      // TRANSLATED ROUTES NESTED WAY
      // route('/it', 'routes/$locale/index.jsx', () => {
      //   // - path is relative to parent path
      //   // - filenames are still relative to the app directory
      //   route(
      //     'categorie/:category',
      //     'routes/$locale//categories/$category.jsx'
      //   );
      //   route('prodotti/:product', 'routes/$locale//products/$product.jsx');
      // });
      // route('/en', 'routes/$locale/index.jsx', () => {
      //   route('categories/:category', 'categories/$category.jsx');
      //   route('products/:product', 'products/$product.jsx');
      // });
      //
      //INDEX ROUTES
      // route('/', 'routes/$locale/index.jsx');
      // route('/category/:id', 'routes/$locale/categories/$category.jsx');
      // route('/product/:id', 'routes/$locale/products/$product.jsx');
    });
  },
};
