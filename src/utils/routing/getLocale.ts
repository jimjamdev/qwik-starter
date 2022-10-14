import { useLocation } from '@builder.io/qwik-city';
import { getLocaleFromPath } from '~/utils';
import { config } from '~/config';

export function getLocale() {
  const location = useLocation();
  const locale = getLocaleFromPath(location.pathname);
  return locale || config.defaultLocale;
}
