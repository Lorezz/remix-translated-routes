/**
 * @type {import('@remix-run/dev/config').AppConfig}
 */
const getPaths = require('./app/lib/getPaths');

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
    const pages = await getPaths();
    return defineRoutes((route) => {
      for (let page of pages) {
        const { source, dest } = page;
        route(`${source}`, `pages/${dest}`);
      }
    });
  },
};

/*
// route(`/it`, `routes/index.jsx`, { index: true, locale: 'it' });
//route(`/`, `routes/index.jsx`, { index: true, locale: 'en' });
// create some custom routes from the pages/ dir
      // for (let page of pages) {
      //   if (page.endsWith('.mdx')) continue;
      //   let slug = page.replace(/\.[a-z]+$/, '');
      //   route(`/page/${slug}`, `pages/${page}`);
      // }
      // route('programmatic', 'pages/test.jsx', () => {
      //   // route("/test", "routes/blog/index.tsx", { index: true });
      //   route(':messageId', 'pages/child.jsx');
      // });

*/
