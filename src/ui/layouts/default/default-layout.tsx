import { component$, Slot } from "@builder.io/qwik";
import {
  DefaultLayoutContentCss,
  DefaultLayoutCss,
  DefaultLayoutFooterCss,
  DefaultLayoutHeaderCss,
  DefaultLayoutMainCss,
  DefaultLayoutSidebarCss,
} from "./default.css";

export const DefaultLayout = component$(({ header, footer, sidebar }) => {
  return (
    <section class={DefaultLayoutCss}>
      <aside class={DefaultLayoutSidebarCss}>{sidebar}</aside>
      <main className={DefaultLayoutMainCss}>
        <header class={DefaultLayoutHeaderCss}>{header}</header>
        <article class={DefaultLayoutContentCss}>
          <Slot />
        </article>
        <footer class={DefaultLayoutFooterCss}>{footer}</footer>
      </main>
    </section>
  );
});
