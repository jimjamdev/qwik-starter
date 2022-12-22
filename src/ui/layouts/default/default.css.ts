import { style } from "styled-vanilla-extract/qwik";

export const DefaultLayoutCss = style({
  display: "grid",
  gridTemplateAreas: `
    "sidebar"
    "main"
    `,
  gridTemplateRows: "auto 1fr",
  minHeight: "100vh",
});

export const DefaultLayoutSidebarCss = style({
  gridArea: "sidebar",
});
export const DefaultLayoutMainCss = style({
  gridArea: "main",
  display: "grid",
  gridTemplateRows: "auto 1fr auto",
  gridTemplateAreas: `
    "header"
    "content"
    "footer"`
});

export const DefaultLayoutHeaderCss = style({
  gridArea: "header",
});

export const DefaultLayoutContentCss = style({
  gridArea: "content",
});

export const DefaultLayoutFooterCss = style({
  gridArea: "footer",
});
