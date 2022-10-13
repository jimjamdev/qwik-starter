import { formatPath } from '~/utils/formatPath';
import { config } from "~/config";

export function getLocaleFromPath(path: string) {
  const getLocale = path.split('/')[1];
  const locale = formatPath(getLocale);
  return locale || config.defaultLocale;
}
