import { config } from "~/config";
import { isBrowser } from "~/utils/client/isBrowser";

export function getBrowserLanguage() {
  return isBrowser ? navigator?.language : config.defaultLocale;
}