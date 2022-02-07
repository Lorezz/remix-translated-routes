import { useLoaderData, json, useMatches, useParams } from 'remix';

export let loader = async ({ params }) => {
  console.log('params', params);
  //todo fake call
  const data = { params };
  return json(data);
};

// https://remix.run/guides/routing#index-routes
export default function Index() {
  let data = useLoaderData();
  const matches = useMatches();
  const params = useParams();
  const { article } = params;
  return (
    <div>
      <h1>ARTICLE {article}</h1>
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
