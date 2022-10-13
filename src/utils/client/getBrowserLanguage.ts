import { config } from "~/config";
import { isBrowser } from "~/utils/client/isBrowser";

export function getBrowserLanguage() {
  return isBrowser && navigator ? navigator?.language : config.defaultLocale;
}
