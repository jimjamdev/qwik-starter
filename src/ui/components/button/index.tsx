import { component$, JSXChildren, Slot } from "@builder.io/qwik";
import { buttonCss } from "~/ui/components/button/button.css";

export interface ButtonProps {
  class?: string;
  children?: JSXChildren;
}

export const Button = component$((props: ButtonProps) => {

  return <button class={buttonCss() + ' ' + props.class}><Slot /></button>;
});
