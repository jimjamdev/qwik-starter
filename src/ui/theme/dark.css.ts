import { createTheme } from "@vanilla-extract/css";
import { theme } from "~/ui/theme/theme.css";
import { baseTheme } from "~/ui/theme/base.css";
// import { baseTheme } from "~/ui/theme/base.css";

export const darkTheme = createTheme(theme, {
  ...baseTheme,
  color: {
    ...baseTheme.color,
    brandLight: "#e5ecff",
    brand: "#043678",
    brandDark: "#010b2c",
    body: "#2c2c2c",
  },
  font: {
    ...baseTheme.font,
  },
});
