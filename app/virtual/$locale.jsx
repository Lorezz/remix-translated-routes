import { useLoaderData, json, useMatches, useParams, Link } from 'remix';
import getPrefixes from '~/lib/prefixes';
import { getPages } from '~/lib/pages';

export let loader = async ({ params }) => {
  console.log('PARAMS', params);
  const prefixes = getPrefixes();
  const pages = getPages();
  const data = { pages, prefixes };
  return json(data);
};

export default function Index() {
  const params = useParams();
  const data = useLoaderData();
  const matches = useMatches();
  const pathname = matches
    .reduce(
      (found, item) =>
        found ? found : item.pathname.length > 1 ? item.pathname.slice(1) : '',
      ''
    )
    .replace('/', '')
    .trim();

  const locale = params.locale || pathname || 'en';
  const { pages, prefixes } = data;
  return (
    <div>
      <h1>VIRTUAL HOME {locale}</h1>
      <ul>
        {pages
          .filter((p) => p.locale === locale)
          .map((item) => {
            const prefix = prefixes[item.__typename][item.locale];
            const url = `${prefix}/${item.slug}`;
            return (
              <li key={item.slug}>
                <Link
                  to={`${
                    item.locale === 'en' ? '' : '/' + item.locale + '/'
                  }${url}`}
                >
                  <span>{url}</span>
                </Link>
              </li>
            );
          })}
      </ul>
      {params && (
        <>
          <h4>PARAMS</h4>
          <small>
            <code>
              <pre>{JSON.stringify(params, null, 2)}</pre>
            </code>
          </small>
        </>
      )}
      {matches && (
        <>
          <h4>MATCHES</h4>
          <small>
            <code>
              <pre>{JSON.stringify(matches, null, 2)}</pre>
            </code>
          </small>
        </>
      )}
    </div>
  );
}
