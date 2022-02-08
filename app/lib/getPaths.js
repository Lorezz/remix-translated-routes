import { getPages } from './pages';
import getPrefixes from './prefixes';

export default function getPaths() {
  return new Promise((resolve, reject) => {
    const pages = getPages();
    const prefixes = getPrefixes();
    const paths = pages.map((item) => {
      const prefix = prefixes[item.__typename][item.locale];
      const source = `${item.locale === 'en' ? '/' : '/it/'}${prefix}/${
        item.slug
      }`;
      const dest = `${item.__typename}.jsx`;
      return { source, dest };
    });
    console.log('paths', paths);
    resolve(paths);
  });
}
