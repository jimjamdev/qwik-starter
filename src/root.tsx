import { component$ } from '@builder.io/qwik';
import { QwikCityProvider, RouterOutlet, ServiceWorkerRegister } from "@builder.io/qwik-city";
import { RouterHead } from './components/router-head/router-head';
import { darkTheme } from "~/ui/theme/dark.css";
import { LocaleProvider } from "~/context/locale";

export default component$(() => {
  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <RouterHead />
      </head>
      <body lang="en" class={darkTheme}>
      <LocaleProvider>
       <RouterOutlet />
      </LocaleProvider>
      <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  )
});
