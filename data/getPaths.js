const fsp = require('fs').promises;
// const path = require('path');

const pages = [
  {
    locale: 'it',
    slug: 'come-configurare-algolia',
    __typename: 'article',
    id: 'dw8a01atq7g',
  },
  {
    id: 'f6i1qrqwa9m',
    locale: 'en',
    slug: 'how-to-configure-algolia',
    __typename: 'article',
  },
  {
    locale: 'it',
    slug: 'come-integrare-vimeo',
    __typename: 'article',
    id: 's6rdusryl4',
  },
  {
    locale: 'en',
    slug: 'how-to-integrate-vimeo',
    __typename: 'article',
    id: 'uc1skk20h2',
  },
  {
    locale: 'it',
    slug: 'pantaloni-mimetici-verde-militare',
    __typename: 'product',
    id: 'jro3zdxrxf8',
  },
  {
    locale: 'en',
    slug: 'green-camo-pants',
    __typename: 'product',
    id: 'tcm6smjljfd',
  },
  {
    locale: 'it',
    slug: 'felpa-rosa-lavato',
    __typename: 'product',
    id: '8tong250y5k',
  },
  {
    locale: 'en',
    slug: 'sweater-washed-pink',
    __typename: 'product',
    id: 'wi5uv82iv1',
  },
];

const prefixes = {
  article: {
    it: 'articoli',
    en: 'articles',
  },
  product: {
    it: 'prodotti',
    en: 'products',
  },
};

function getPaths() {
  return new Promise((resolve, reject) => {
    const paths = pages.map((item) => {
      const prefix = prefixes[item.__typename][item.locale];
      const source = `${prefix}/${item.slug}`;
      const dest = `${prefixes[item.__typename]['en']}/$${item.__typename}.jsx`;
      return { source, dest, item };
    });
    console.log('paths', paths);
    resolve(paths);
  });
}

(async () => {
  const data = await getPaths();
  console.log('data', data);
  await fsp.writeFile('./data/paths.json', JSON.stringify(data, null, 2));
})();
