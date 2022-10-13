import { component$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import { formatPath } from "~/utils/formatPath";

export default component$(() => {
  const location = useLocation();
  const path = formatPath(location.pathname);
  return(<div>locale route {path || 'en'}</div>)
});