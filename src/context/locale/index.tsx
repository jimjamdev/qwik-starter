import {
  component$,
  useStore,
  useContextProvider,
  createContext,
  Slot,
} from '@builder.io/qwik';

export const LocaleContext = createContext('locale');

export const LocaleProvider = component$(() => {
  const locale = useStore({ value: 'en' });
  useContextProvider(LocaleContext, locale);
  return <Slot />;
});
