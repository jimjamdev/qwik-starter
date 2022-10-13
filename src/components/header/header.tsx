import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { Link, useLocation } from '@builder.io/qwik-city';
import { QwikLogo } from '../icons/qwik';
import styles from './header.css?inline';
import { getLocaleFromPath } from '~/utils/getLocaleFromPath';

export default component$(() => {
  useStylesScoped$(styles);
  const location = useLocation();
  const locale = getLocaleFromPath(location.pathname);
  console.log('locale', locale);
  return (
    <header>
      <div class="logo">
        <a href="https://qwik.builder.io/" target="_blank">
          <QwikLogo />
        </a>
      </div>
      <ul>
        <li>
          <Link href={`/${locale}`}>
            Home
          </Link>
        </li>
        <li>
          <Link href={`/${locale}/listing`}>
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
