import { component$, Slot } from '@builder.io/qwik';
import { css } from '@stitches/core';

export const style = css`background: #006ce9`;
export const Button: any = component$(() => (
  <button css={style}>
    <Slot />
  </button>
));
