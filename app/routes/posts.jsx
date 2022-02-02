import { Outlet, Link, useLoaderData } from 'remix';

export default function Admin() {
  return (
    <div className="admin">
      <nav>
        <h1>POSTS SECTION</h1>
        <p>
          <Link to={`/`}>BACK</Link>
        </p>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
