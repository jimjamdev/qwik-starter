import {
  component$,
  useStore,
  useContextProvider,
  createContext,
  Slot, useContext
} from "@builder.io/qwik";
import { useLocation } from '@builder.io/qwik-city';
import { getLocaleFromPath } from '~/utils';

export interface ILocale {
  lang?: string;
}

export const LocaleContext = createContext('locale');

export const LocaleProvider = component$(() => {
  const location = useLocation();
  const value = getLocaleFromPath(location.pathname);
  const locale = useStore<ILocale>({ lang: value || 'en' });
  useContextProvider(LocaleContext, locale);
  return <Slot />;
});

export const useLocale = () => useContext(LocaleContext) as ILocale;
