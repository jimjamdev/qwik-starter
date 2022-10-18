import { component$, Slot } from '@builder.io/qwik';
import { css } from '~/theme/config';

export const style = css({
  button: {
    backgroundColor: 'red',
  },
});

export const Button: any = component$(() => (
  <button
    class={style.button}
  >
    <Slot />
  </button>
));
