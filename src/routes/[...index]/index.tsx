import { component$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';
import { Button } from '~/components/atoms/button';
import { useLocale } from "~/context/locale";

export default component$(() => {
  const locale = useLocale();
  console.log('locale', locale);
  return (<div>locale route {locale.lang} <Button>Test</Button></div>);
});

export const head: DocumentHead = {
  title: 'Hello',
};
