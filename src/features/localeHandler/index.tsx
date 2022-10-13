import { useLocation } from "@builder.io/qwik-city";
import { component$ } from "@builder.io/qwik";
import { getLocale } from "~/utils/routing/getLocale";
import { getBrowserLanguage } from "~/utils/client/getBrowserLanguage";

export default component$(() => {
  const locale = getLocale();
  const browserLocale = getBrowserLanguage();
  return (<div>locale route {location.pathname}</div>)
});