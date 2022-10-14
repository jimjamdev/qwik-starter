import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { QwikLogo } from '../icons/qwik';
import styles from './header.css?inline';
import { getBrowserLanguage } from '~/utils/client/getBrowserLanguage';
import { getLocale } from '~/utils/routing/getLocale';
import { config } from '~/config';

export default component$(() => {
  useStylesScoped$(styles);
  const locale = getLocale();
  console.log('locale', locale);
  const path = locale === config.defaultLocale ? '' : locale;
  console.log('path', path);
  console.log('getBrowserLanguage', getBrowserLanguage());

  return (
    <header>
      <div class="logo">
        <a href="https://qwik.builder.io/" target="_blank">
          <QwikLogo />
        </a>
      </div>
      <ul>
        <li>
          <Link href={`/${path}`}>
            Home
          </Link>
        </li>
        <li>
          <Link href={`${path}/listing`}>
            Listing
          </Link>
        </li>
        <li>
          <a href="https://qwik.builder.io/examples/introduction/hello-world/" target="_blank">
            Examples
          </a>
        </li>
        <li>
          <a href="https://qwik.builder.io/tutorial/welcome/overview/" target="_blank">
            Tutorials
          </a>
        </li>
      </ul>
    </header>
  );
});
