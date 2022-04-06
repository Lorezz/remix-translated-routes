import { useLoaderData, json, useMatches, useParams, Link } from 'remix';
import getPrefixes from '~/lib/prefixes';
import { getPages } from '~/lib/pages';

export let loader = async ({ params }) => {
  const prefixes = getPrefixes();
  const pages = getPages();
  const data = { pages, prefixes };
  return json(data);
};

export default function Index() {
  let data = useLoaderData();
  const matches = useMatches();
  const pathname = matches.reduce(
    (found, item) =>
      found ? found : item.pathname.length > 1 ? item.pathname.slice(1) : '',
    ''
  );
  const params = useParams();
  const { pages, prefixes } = data;
  const locale = params.locale || pathname || 'en';
  return (
    <div>
      <h1>HOME {locale}</h1>
      <ul>
        {pages
          .filter((p) => p.locale === locale)
          .map((item) => {
            const prefix = prefixes[item.__typename][item.locale];
            const url = `${prefix}/${item.slug}`;
            return (
              <li key={item.slug}>
                <Link to={`${item.locale === 'en' ? '' : '/it/'}${url}`}>
                  <span>{url}</span>
                </Link>
              </li>
            );
          })}
      </ul>
      <pre>{JSON.stringify(data, null, 2)}</pre>
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
