import { component$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';
import { getLocale } from '~/utils/routing/getLocale';
import { Button } from '~/components/atoms/button';

export default component$(() => {
  const locale = getLocale();
  return (<div>locale route {locale} <Button>Test</Button></div>);
});

export const head: DocumentHead = {
  title: 'Hello',
};
