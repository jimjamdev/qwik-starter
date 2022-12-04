import {
  component$,
  useStore,
  useContextProvider,
  createContext,
  Slot, useContext
} from "@builder.io/qwik";
import { useLocation } from '@builder.io/qwik-city';
import { getLocaleFromPath } from '~/utils';

export const LocaleContext = createContext('locale');

export const LocaleProvider = component$(() => {
  const location = useLocation();
  console.log('location', location);
  const value = getLocaleFromPath(location.pathname);
  const locale = useStore({ lang: value });
  useContextProvider(LocaleContext, locale);
  return <Slot />;
});

export const useLocale = () => useContext(LocaleContext);
