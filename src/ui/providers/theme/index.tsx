import {
  $,
  component$,
  useContextProvider,
  createContext,
  Slot, useContext, useStore
} from "@builder.io/qwik";
import { ThemeList, themes } from "~/ui/theme/themeList";

export interface IThemeContext {
  value?: any;
  activeTheme?: ThemeList;
}

export interface IThemeProvider {
  themeList?: any;
}

export const ThemeContext = createContext('theme');

export const ThemeProvider = component$((props: IThemeProvider) => {
  const theme = useStore<IThemeContext>({ value: props.themeList['light'], activeTheme: 'light' });
  useContextProvider(ThemeContext, theme);
  return <Slot />;
});

export const useTheme = () => {
  const state = useContext(ThemeContext) as IThemeContext;
  return {
    value: state.value,
    setTheme: $((theme: ThemeList) => {
      state.value = themes[theme];
      state.activeTheme = theme;
    }),
    switchTheme: $(() => {
      state.value = state.value === themes['light'] ? themes['dark'] : themes['light'];
      state.activeTheme = state.activeTheme === 'light' ? 'dark' : 'light';
    }),
  };
}
