import { style } from "styled-vanilla-extract/qwik";
import { theme } from "~/ui/theme/theme.css";

export const buttonCss = style({
  backgroundColor: theme.color.brand,
  color: 'white',
  padding: "10px 20px",
  borderRadius: "5px",
  border: "none",
  cursor: "pointer",
  transition: "all 0.3s ease",
  ":hover": {
    backgroundColor: theme.color.brandDark,
  },
})
