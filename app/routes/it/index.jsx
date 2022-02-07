import { useLoaderData, json, useMatches, useParams, Link } from 'remix';
import getPrefixes from '~/lib/prefixes';
import { getPages } from '~/lib/pages';

export let loader = async (allStuff) => {
  console.log('allStuff', allStuff);
  const { params } = allStuff;
  const locale = params.locale || 'it';
  const pages = getPages().filter((i) => i.locale === locale);
  const prefixes = getPrefixes();
  const data = { params, pages, prefixes };
  return json(data);
};

// https://remix.run/guides/routing#index-routes
export default function Index() {
  let data = useLoaderData();
  const matches = useMatches();
  const params = useParams();
  const { pages, prefixes } = data;
  const locale = params.locale || matches.pathname || 'it';
  return (
    <div>
      <h1>HOME LOCALE {locale}</h1>
      <ul>
        {pages.map((item) => {
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
