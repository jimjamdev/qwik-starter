import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
// import styles from './header.css?inline';
import { getLocale } from '~/utils/routing/getLocale';
import { config } from '~/config';
import { headerCss } from "~/components/header/header.css";

export default component$(() => {
  // useStylesScoped$(styles);
  const locale = getLocale();
  const path = locale === config.defaultLocale ? '/' : `/${locale}/`;

  return (
    <nav class={headerCss}>
      <Link href={`${path}`} className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
            aria-current="page">Home</Link>

      <Link href={`${path}listing`}
            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Listing</Link>
    </nav>
  );
});
