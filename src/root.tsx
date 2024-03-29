import "~/ui/theme/global.css";
import "~/ui/style/main.css";
import { component$ } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";
import { portalsList } from "~/components/portals/portalsList";
import { PortalRenderer } from "~/ui/providers/portal/portal-renderer";
import { QwikPartytown } from "~/components/partytown/partytown";
import {
  AuthProvider,
  LocaleProvider,
  PortalProvider,
  ThemeProvider
} from "~/ui/providers";
import { themes } from "~/ui/theme/themeList";

export default component$(() => {
  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#000000" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/images/icons/icon-192x192.png" />
        <QwikPartytown forward={["dataLayer.push"]} />
        <script
          async
          type="text/partytown"
          src="https://www.googletagmanager.com/gtag/js?id=G-PDJMFXEJ6G"
        />
        <RouterHead />
      </head>
      <ThemeProvider themeList={themes}>
        <LocaleProvider>
          <AuthProvider>
            <PortalProvider portalsList={portalsList}>
              <body>
                <RouterOutlet />
                <PortalRenderer portalsList={portalsList} />
                <ServiceWorkerRegister />
              </body>
            </PortalProvider>
          </AuthProvider>
        </LocaleProvider>
      </ThemeProvider>
    </QwikCityProvider>
  );
});
