import { component$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';
import { Button } from '~/components/atoms/button';
import { useLocale } from "~/context/locale";

export default component$(() => {
  const { lang } = useLocale();
  console.log('locale', lang);
  return (<div>locale route {lang} <Button>Test</Button></div>);
});

export const head: DocumentHead = {
  title: 'Casino App',
};
