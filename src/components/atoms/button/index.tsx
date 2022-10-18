import { component$, Slot } from '@builder.io/qwik';

export const Button: any = component$(() => (
  <button
    css={{
      background: 'tomato',
    }}
  >
    <Slot />
  </button>
));
