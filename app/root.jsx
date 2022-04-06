import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  Link,
} from 'remix';

import getLocales from '~/lib/locales';

export function meta() {
  return { title: 'New Remix App' };
}

export default function App() {
  const locales = getLocales();
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div>
          <div>
            {locales.map((locale) => (
              <span className="nav" key={locale} style={{ margin: 4 }}>
                <Link to={`/${locale == 'en' ? '' : locale + '/'}`}>
                  {locale}
                </Link>
              </span>
            ))}
            <hr />
          </div>
          <Outlet />
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
