import {
  component$,
  useStore,
  useContextProvider,
  createContext,
  Slot,
} from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
import { getLocaleFromPath } from '~/utils';

export const LocaleContext = createContext('locale');

export const LocaleProvider = component$(() => {
  const location = useLocation();
  const value = getLocaleFromPath(location.pathname);
  const locale = useStore({ value });
  useContextProvider(LocaleContext, locale);
  return <Slot />;
});
