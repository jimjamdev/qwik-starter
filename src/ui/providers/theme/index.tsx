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
  activeThemeKey?: ThemeList;
  themeKeys?: Array<string>;
}

export interface IThemeProvider {
  themeList?: any;
}

export const ThemeContext = createContext("theme");

export const ThemeProvider = component$((props: IThemeProvider) => {
  const themeKeys = Object.keys(props.themeList).map((key) => key);
  const theme = useStore<IThemeContext>({
    theme: props.themeList["light"],
    activeThemeKey: "light",
    themeKeys
  });
  useContextProvider(ThemeContext, theme);
  return <Slot />;
});

export const useTheme = () => {
  const state = useContext(ThemeContext) as IThemeContext;
  return {
    theme: state.theme,
    activeThemeKey: state.activeThemeKey,
    setTheme: $((theme: ThemeList) => {
      state.theme = themes[theme];
      state.activeThemeKey = theme;
    }),
  };
};
