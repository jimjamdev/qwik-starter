import { component$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';
import { getLocale } from '~/utils/routing/getLocale';

export default component$(() => {
  const locale = getLocale();
  return (<div>locale route {locale}</div>);
});

export const head: DocumentHead = {
  title: 'Hello',
};
