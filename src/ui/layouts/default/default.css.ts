import { style } from "styled-vanilla-extract/qwik";

export const DefaultLayoutCss = style({
  display: "grid",
  gridTemplateAreas: `
    "sidebar main"
    `,
  gridTemplateColumns: "auto 1fr",
  minHeight: "100%",
});

export const DefaultLayoutSidebarCss = style({
  gridArea: "sidebar",
  backgroundColor: '#f0f0f0',
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
