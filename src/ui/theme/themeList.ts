import { lightTheme } from "~/ui/theme/light.css";
import { darkTheme } from "~/ui/theme/dark.css";

export const themes = {
  light: lightTheme,
  dark: darkTheme,
}

export type ThemeList = keyof typeof themes;
