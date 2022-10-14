import {
  component$,
  useStore,
  useContext,
  useContextProvider,
  createContext,
} from '@builder.io/qwik';

export const LocaleContext = createContext('locale');

export const LocaleProvider = component$(() => {
  const locale = useStore({ value: 'en' });
  useContextProvider(LocaleContext, locale);
  return (<><Children /></>);
});
