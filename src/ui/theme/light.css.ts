import { createTheme } from "@vanilla-extract/css";
import { theme } from "~/ui/theme/theme.css";

export const lightTheme = createTheme(theme, {
  color: {
    brandLight: "#be8282",
    brand: "#900404",
    brandDark: "#330404",
  },
  font: {
    body: "helvetica",
  },
});
