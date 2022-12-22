import { style } from "styled-vanilla-extract/qwik";

export const DefaultLayoutCss = style({
  display: "grid",
  gridTemplateAreas: `
    "sidebar"
    "main"
    `,
  gridTemplateColumns: "auto 1fr",
  minHeight: "100vh",
});

export const DefaultLayoutSidebarCss = style({
  gridArea: "sidebar",
  minWidth: "200px",
});
export const DefaultLayoutMainCss = style({
  gridArea: "main",
  display: "grid",
  gridTemplateColumns: "auto 1fr auto",
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
