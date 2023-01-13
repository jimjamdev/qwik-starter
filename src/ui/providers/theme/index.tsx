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
}

export interface IThemeProvider {
  themeList?: any;
}

export const ThemeContext = createContext('theme');

export const ThemeProvider = component$((props: IThemeProvider) => {
  const activeTheme = useStore<IThemeContext>({ value: props.themeList['light'] });
  useContextProvider(ThemeContext, activeTheme);
  return <Slot />;
});

export const useTheme = () => {
  const state = useContext(ThemeContext) as IThemeContext;
  return {
    value: state.value,
    setTheme: $((theme: ThemeList) => {
      state.value = themes[theme];
    }),
    switchTheme: $(() => {
      state.value = state.value === themes['light'] ? themes['dark'] : themes['light'];
    }),
  };
}
