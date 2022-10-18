import { component$ } from '@builder.io/qwik';
import {
  QwikCity,
  RouterOutlet,
  ServiceWorkerRegister,
} from '@builder.io/qwik-city';
import { getCssText } from '~/theme/config';

import { RouterHead } from './components/router-head/router-head';

// import styles from './global.css?inline';
import { LocaleProvider } from '~/context/locale';

export default component$(() => (
    <QwikCity>
      <head>
        <meta charSet="utf-8" />
        { /* @ts-ignore */ }
        <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
        <RouterHead />
      </head>
      <body lang="en">
        <LocaleProvider>
          <RouterOutlet />
        </LocaleProvider>
        <ServiceWorkerRegister />
      </body>
    </QwikCity>
));
