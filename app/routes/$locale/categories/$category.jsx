import { useLoaderData, json, useMatches, useParams } from 'remix';

export let loader = async ({ params }) => {
  //todo fake call
  const data = { params, type: 'category' };
  return json(data);
};

export function meta({ data }) {
  return {
    title: data?.title || 'mah',
    description: data?.description || 'boh',
  };
}

export default function PostRoute() {
  const data = useLoaderData();
  const params = useParams();
  const { category, locale } = params;
  const matches = useMatches();
  return (
    <div>
      <h1>CATEGORY SLUG: {category}</h1>
      <h2>locale: {locale}</h2>
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
