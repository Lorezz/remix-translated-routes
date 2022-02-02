import { useLoaderData, json, useMatches, useParams } from 'remix';

export let loader = async ({ params }) => {
  const slugs = params['*'] || 'index';
  console.log('slugs', slugs);
  //todo fake call
  const data = { slugs, title: 'fake' };
  return json(data);
};

export function meta({ data }) {
  return {
    title: data?.title || 'mah',
    description: data?.description || 'boh',
  };
}

// https://remix.run/guides/routing#index-routes
export default function Index() {
  let data = useLoaderData();
  const matches = useMatches();
  const params = useParams();

  return (
    <div>
      <h1>HOME {data.title}</h1>
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
