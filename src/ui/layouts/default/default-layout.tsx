import { component$, JSXNode, Slot } from "@builder.io/qwik";
import {
  DefaultLayoutContentCss,
  DefaultLayoutCss,
  DefaultLayoutFooterCss,
  DefaultLayoutHeaderCss,
  DefaultLayoutMainCss,
  DefaultLayoutSidebarCss,
} from "./default.css";

export interface DefaultLayout {
  header?: JSXNode;
  sidebar?: JSXNode;
  footer?: JSXNode;
}

export const DefaultLayout = component$(({ header, footer, sidebar }: DefaultLayout) => {
  return (
    <main class={DefaultLayoutCss}>
      { sidebar ? <aside class={DefaultLayoutSidebarCss}>{sidebar}</aside> : null }
      <section className={DefaultLayoutMainCss}>
        { header ? <header class={DefaultLayoutHeaderCss}>{header}</header> : null }
        <article class={DefaultLayoutContentCss}>
          <Slot />
        </article>
        { footer ? <footer class={DefaultLayoutFooterCss}>{footer}</footer> : null }
      </section>
    </main>
  );
});
