import { component$, useStylesScoped$ } from '@builder.io/qwik';
import {
  QwikCity,
  RouterOutlet,
  ServiceWorkerRegister,
} from '@builder.io/qwik-city';
import { RouterHead } from './components/router-head/router-head';

import styles from './global.css?inline';
import { LocaleProvider } from '~/context/locale';

export default component$(() => {
  useStylesScoped$(styles);
  return (
    <QwikCity>
      <head>
        <meta charSet="utf-8" />
        <RouterHead />
      </head>
      <body lang="en">
        <LocaleProvider>
          <RouterOutlet />
        </LocaleProvider>
        <ServiceWorkerRegister />
      </body>
    </QwikCity>
  );
});
