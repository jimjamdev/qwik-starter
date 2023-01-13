import { component$ } from "@builder.io/qwik";
import { Link } from '@builder.io/qwik-city';
import { getLocale } from '~/utils/routing/getLocale';
import { headerCss, linkStyle } from "~/components/header/header.css";
import { useTheme } from "~/ui/providers";

export default component$(() => {
  const locale = getLocale();
  const theme = useTheme();
  const path = `/${locale}/`;

  return (
    <nav class={headerCss}>
      <Link class={linkStyle} href={`${path}`} aria-current="page">Home</Link>

      <Link class={linkStyle} href={`${path}listing`}>Listing</Link>

      <button onClick$={() => theme.switchTheme()}>switch</button>
    </nav>
  );
});
