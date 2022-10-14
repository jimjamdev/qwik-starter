import { component$ } from '@builder.io/qwik';
import { DocumentHead, useLocation } from '@builder.io/qwik-city';
import { formatPath } from '~/utils/routing/formatPath';

export default component$(() => {
  const location = useLocation();
  const path = formatPath(location.pathname);
  return (<div>locale route {path || 'en'}</div>);
});

export const head: DocumentHead = {
  title: 'Hello',
};
