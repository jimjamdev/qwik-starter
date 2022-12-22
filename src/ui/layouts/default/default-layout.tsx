import { Component, component$, Slot } from "@builder.io/qwik";
import {
  DefaultLayoutContentCss,
  DefaultLayoutCss,
  DefaultLayoutFooterCss,
  DefaultLayoutHeaderCss,
  DefaultLayoutMainCss,
  DefaultLayoutSidebarCss,
} from "./default.css";

export interface DefaultLayout {
  headerComponent?: Component<any>;
  sidebarComponent?: Component<any>;
  footerComponent?: Component<any>;
}

export const DefaultLayout = component$(
  ({ headerComponent, footerComponent, sidebarComponent }: DefaultLayout) => {
    const HeaderComponent = headerComponent || (() => <></>);
    const SidebarComponent = sidebarComponent || (() => <></>);
    const FooterComponent = footerComponent || (() => <></>);

    return (
      <div class={DefaultLayoutCss}>
        <aside class={DefaultLayoutSidebarCss}>
          <SidebarComponent />
        </aside>
        <main class={DefaultLayoutMainCss}>
          {headerComponent ? (
            <header class={DefaultLayoutHeaderCss}>
              <HeaderComponent />
            </header>
          ) : null}
          <article class={DefaultLayoutContentCss}>
            <Slot />
          </article>
          {footerComponent ? (
            <footer class={DefaultLayoutFooterCss}>
              <FooterComponent />
            </footer>
          ) : null}
        </main>
      </div>
    );
  }
);
