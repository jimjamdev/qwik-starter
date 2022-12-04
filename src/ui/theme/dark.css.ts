import { createTheme } from "@vanilla-extract/css";
import { theme } from "~/ui/theme/theme.css";

export const darkTheme = createTheme(theme, {
  color: {
    brand: "blue",
  },
  font: {
    body: "helvetica",
  },
});
