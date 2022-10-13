import { component$ } from '@builder.io/qwik';
import { DocumentHead, useLocation } from "@builder.io/qwik-city";
import { formatPath } from '~/utils/routing/formatPath';
import { getLocale } from "~/utils/routing/getLocale";

export default component$(() => {
  const locale = getLocale();
  return (<div>locale route {locale}</div>);
});

export const head: DocumentHead = {
  title: 'Hello',
};