import { component$ } from '@builder.io/qwik';
import {
  QwikCity,
  RouterOutlet,
  ServiceWorkerRegister,
} from '@builder.io/qwik-city';
import { RouterHead } from './components/router-head/router-head';

export default component$(
  ({ emotionExtract }: { emotionExtract?: { css: string } }) => (
      <QwikCity>
        <head>
          <meta charSet="utf-8" />
          <RouterHead />
          <style
            data-emotion="css"
            dangerouslySetInnerHTML={emotionExtract?.css}
          />
        </head>
        <body lang="en">
        <RouterOutlet />
        <ServiceWorkerRegister />
        </body>
      </QwikCity>
  ),

);
