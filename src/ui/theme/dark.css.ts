import { createTheme } from "@vanilla-extract/css";
import { theme } from "~/ui/theme/theme.css";

export const darkTheme = createTheme(theme, {
  color: {
    brandLight: "#1e1e1e",
    brand: "#0f0f0f",
    brandDark: "red",
  },
  font: {
    body: "helvetica",
  },
});
