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
import { globalStyles } from '~/theme/global';

export const styles = getCssText();
console.log('getCssText()', getCssText());

export default component$(() => {
  globalStyles();
  return (
    <QwikCity>
      <head>
        <meta charSet="utf-8" />
        { /* @ts-ignore */ }
        <style id="stitches" dangerouslySetInnerHTML={{ __html: styles }} />
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
