import {
  $,
  component$,
  useContextProvider,
  createContext,
  Slot,
  useContext,
  useStore,
} from "@builder.io/qwik";
import { ThemeList, themes } from "~/ui/theme/themeList";

export interface IThemeContext {
  theme?: any;
  activeTheme?: ThemeList;
}

export interface IThemeProvider {
  themeList?: any;
}

export const ThemeContext = createContext("theme");

export const ThemeProvider = component$((props: IThemeProvider) => {
  const theme = useStore<IThemeContext>({
    theme: props.themeList["light"],
    activeTheme: "light",
  });
  useContextProvider(ThemeContext, theme);
  return <Slot />;
});

export const useTheme = () => {
  const state = useContext(ThemeContext) as IThemeContext;
  return {
    theme: state.theme,
    activeTheme: state.activeTheme,
    setTheme: $((theme: ThemeList) => {
      state.theme = themes[theme];
      state.activeTheme = theme;
    }),
    switchTheme: $(() => {
      state.theme =
        state.theme === themes["light"] ? themes["dark"] : themes["light"];
      state.activeTheme = state.activeTheme === "light" ? "dark" : "light";
    }),
  };
};
