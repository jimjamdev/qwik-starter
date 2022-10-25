import { component$, useOnWindow, useStore } from '@builder.io/qwik';

export const useWindow = component$(() => {
  const store = useStore<{ win: Window | undefined }>(
    { win: undefined },
    { recursive: true },
  );
  useOnWindow('resize', () => {
    store.win = window;
  });
  return {
    width: store.win?.innerWidth,
    height: store.win?.innerHeight,
  };
});
