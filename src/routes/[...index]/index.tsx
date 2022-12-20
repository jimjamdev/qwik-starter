import { component$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';
import { useLocale } from "~/context/locale";
import { Button } from "~/ui/components/button";

export default component$(() => {
  const { lang } = useLocale();
  console.log('locale', lang);
  return (<div>locale route {lang} <Button>Test</Button></div>);
});

export const head: DocumentHead = {
  title: 'Casino App',
};
