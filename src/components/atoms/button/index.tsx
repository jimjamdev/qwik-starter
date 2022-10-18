import { css } from '@stitches/core';
import { component$, Slot } from '@builder.io/qwik';

export const Button = component$(() => {
  const buttonStyle = css({
    backgroundColor: 'red',
  });
  console.log('buttonStyle', buttonStyle);
  return (
    <button class={buttonStyle().className}><Slot /></button>
  );
});
