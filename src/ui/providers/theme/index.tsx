import {
  component$,
  useContextProvider,
  createContext,
  Slot, useContext, useStore
} from "@builder.io/qwik";

export interface IThemeContext {
  value?: any;
}

export interface IThemeProvider {
  theme?: any;
}

export const ThemeContext = createContext('theme');

export const ThemeProvider = component$((props: IThemeProvider) => {
  const activeTheme = useStore<IThemeContext>({ value: props.theme });
  useContextProvider(ThemeContext, activeTheme);
  return <Slot />;
});

export const useTheme = () => useContext(ThemeContext) as IThemeContext;
