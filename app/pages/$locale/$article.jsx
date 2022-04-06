import { useLoaderData, json, useMatches, useParams } from 'remix';
import { getPage } from '~/lib/pages';

export let loader = async ({ params }) => {
  const page = getPage(params.article);
  const data = { page };
  return json(data);
};

export default function Index() {
  let data = useLoaderData();
  const matches = useMatches();
  const params = useParams();
  const { article } = params;
  return (
    <div>
      <h1>page ARTICLE {article}</h1>
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
