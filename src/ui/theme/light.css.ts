import { createTheme } from "@vanilla-extract/css";
import { theme } from "~/ui/theme/theme.css";
import { baseTheme } from "~/ui/theme/base.css";

export const lightTheme = createTheme(theme, {
  ...baseTheme,
});
