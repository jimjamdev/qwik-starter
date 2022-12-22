import { component$, useStore, $ } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";
import { darkTheme } from "~/ui/theme/dark.css";
import { lightTheme } from "~/ui/theme/light.css";
import "~/ui/theme/global.css";
import { ThemeProvider, LocaleProvider } from "~/ui/providers";

export default component$(() => {
  const theme = useStore({
    value: darkTheme,
  });
  const switchTheme = $(() => {
    theme.value = theme.value === darkTheme ? lightTheme : darkTheme;
  });
  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <RouterHead />
      </head>
      <ThemeProvider theme={theme.value}>
        <LocaleProvider>
          <body class={theme.value}>
            <button onClick$={switchTheme}>switch</button>
            <RouterOutlet />
            <ServiceWorkerRegister />
          </body>
        </LocaleProvider>
      </ThemeProvider>
    </QwikCityProvider>
  );
});
