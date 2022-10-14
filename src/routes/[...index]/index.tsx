import { component$ } from '@builder.io/qwik';
import { DocumentHead, useLocation } from '@builder.io/qwik-city';
import { formatPath } from '~/utils/routing/formatPath';
import { Button } from '~/components/atoms/button';

export default component$(() => {
  const location = useLocation();
  const path = formatPath(location.pathname);
  return (<div>locale route {path || 'en'} <Button>Test</Button></div>);
});

export const head: DocumentHead = {
  title: 'Hello',
};
