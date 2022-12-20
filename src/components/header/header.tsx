import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { getLocale } from '~/utils/routing/getLocale';
import { config } from '~/config';
import { headerCss } from "~/components/header/header.css";

export default component$(() => {
  // useStylesScoped$(styles);
  const locale = getLocale();
  const path = locale === config.defaultLocale ? '/' : `/${locale}/`;

  return (
    <nav class={headerCss}>
      <Link href={`${path}`} aria-current="page">Home</Link>

      <Link href={`${path}listing`}>Listing</Link>
    </nav>
  );
});
