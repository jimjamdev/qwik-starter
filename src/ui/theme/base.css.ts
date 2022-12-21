import { createTheme } from "@vanilla-extract/css";
import { theme } from "~/ui/theme/theme.css";

export const baseTheme = createTheme(theme, {
  color: {
    brandLight: "#e3763c",
    brand: "#781904",
    brandDark: "#2c0701",
  },
  font: {
    body: "Arial",
  },
});
