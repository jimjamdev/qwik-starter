import { component$, JSXChildren, Slot } from "@builder.io/qwik";
import { buttonCss } from "~/ui/components/button/button.css";

export interface ButtonProps {
  class?: string;
  children?: JSXChildren;
  onClick$?: () => void;
}

export const Button = component$((props: ButtonProps) => {

  return <button {...props} class={[buttonCss(), props.class].join(' ')}><Slot /></button>;
});
