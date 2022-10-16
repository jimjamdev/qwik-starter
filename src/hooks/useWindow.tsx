import { component$, useOnWindow, useStore } from '@builder.io/qwik';

export const useWindow = component$(() => {
  const store = useStore<{ window: Window | undefined }>(
    { window: undefined },
    { recursive: true },
  );
  useOnWindow('load', () => {
    store.window = window;
  });
  return window;
});
