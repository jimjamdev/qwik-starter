import { formatPath } from "~/utils/formatPath";

export function getLocaleFromPath(path: string) {
  const getLocale = path.split('/')[1];
  console.log('getLocale', getLocale);
  const locale = formatPath(getLocale);
  console.log('--locale', locale || 'en');
  return locale || 'en';
}