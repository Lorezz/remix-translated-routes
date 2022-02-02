import { useLoaderData, json, useMatches, useParams } from 'remix';

export let loader = async ({ params }) => {
  //todo fake call
  const data = { params, type: 'index-locale' };
  return json(data);
};

export function meta({ data }) {
  return {
    title: data?.title || 'index locale',
    description: data?.description || 'boh',
  };
}

export default function PostRoute() {
  const data = useLoaderData();
  const params = useParams();
  const locale = params.locale || 'en';
  const matches = useMatches();
  return (
    <div>
      <h1>index LOCALE: {locale}</h1>
      <ul>
        <li>
          <Link
            to={`/${locale}/${
              locale === 'it' ? 'categorie' : 'categories'
            }/sample-category`}
          >
            Sample Category
          </Link>
          <li>
            <Link
              to={`/${locale}/${
                locale === 'it' ? 'prodotti' : 'products'
              }/sample-product`}
            >
              Sample Product
            </Link>
          </li>
        </li>
      </ul>
      {data && (
        <>
          <h4>DATA</h4>
          <small>
            <code>
              <pre>{JSON.stringify(data, null, 2)}</pre>
            </code>
          </small>
        </>
      )}
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
