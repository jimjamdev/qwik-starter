import { component$, Slot } from '@builder.io/qwik';
import { css } from '~/theme/config';

export const Button = component$(() => {
  const buttonStyle = css({
    backgroundColor: 'red',
  });
  const style = buttonStyle();
  console.log('buttonStyle', style);
  return (
    <button class={style}><Slot /></button>
  );
});
