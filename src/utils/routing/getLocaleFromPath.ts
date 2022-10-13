import { formatPath } from '~/utils/routing/formatPath';
import { config } from "~/config";

export function getLocaleFromPath(path: string) {
  const getLocale = path.split('/')[1];
  const locale = formatPath(getLocale);

  const isLocale = config.locales.includes(locale);

  return isLocale ? locale : config.defaultLocale;
}
