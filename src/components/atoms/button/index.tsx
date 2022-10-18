import { component$, Slot } from '@builder.io/qwik';
import { css } from '~/theme/config';

export const Button = component$(() => {
  const buttonStyle = css({
    backgroundColor: 'red',
  });
  console.log('buttonStyle', buttonStyle);
  return (
    <button class={buttonStyle()}><Slot /></button>
  );
});
