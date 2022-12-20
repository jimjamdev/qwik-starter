import { component$, useClientEffect$, useSignal, useStore } from "@builder.io/qwik";
import { Link } from '@builder.io/qwik-city';
import { getLocale } from '~/utils/routing/getLocale';
import { config } from '~/config';
import { headerCss } from "~/components/header/header.css";

export default component$(() => {
  const locale = getLocale();
  const path = locale === config.defaultLocale ? '/' : `/${locale}/`;
  const ref = useSignal<Element>();
  const store = useStore({
    height: 0,
  });
  useClientEffect$(() => {
    console.log('ref', ref?.value);
    if (ref.value) {
      const rect = ref.value.getBoundingClientRect();
      store.height = Math.round(rect.height);
    }
  });

  return (
    <nav class={headerCss} ref={ref}>
      <Link href={`${path}`} aria-current="page">Home</Link>

      <Link href={`${path}listing`}>Listing</Link>
      {store.height}
    </nav>
  );
});
