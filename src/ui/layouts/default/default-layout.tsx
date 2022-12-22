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
  header?: Component<any>;
  sidebar?: Component<any>;
  footer?: Component<any>;
}

export const DefaultLayout = component$(({ header, footer, sidebar }: DefaultLayout) => {

  const Header = header || (() => <></>);

  return (
    <div class={DefaultLayoutCss}>
      <aside class={DefaultLayoutSidebarCss}>{sidebar}</aside>
      <main className={DefaultLayoutMainCss}>
        { header ? <header class={DefaultLayoutHeaderCss}><Header /></header> : null }
        <article class={DefaultLayoutContentCss}>
          <Slot />
        </article>
       <footer class={DefaultLayoutFooterCss}>{footer}</footer>
      </main>
    </div>
  );
});
