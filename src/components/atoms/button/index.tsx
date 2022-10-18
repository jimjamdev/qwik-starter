import { css } from '@stitches/core';
import { component$, Slot } from '@builder.io/qwik';

export const Button = component$(() => {
  const buttonStyle = css({
    backgroundColor: 'red',
  });
  return (
    <button class={buttonStyle()}><Slot /></button>
  );
});
