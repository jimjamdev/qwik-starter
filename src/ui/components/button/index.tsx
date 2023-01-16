import { component$, JSXChildren, Slot } from "@builder.io/qwik";
import { buttonCss } from "~/ui/components/button/button.css";
import { Box } from "~/ui/components";

export interface ButtonProps {
  class?: string;
  children?: JSXChildren;
  onClick$?: () => void;
  color?: 'primary' | 'secondary';
  size?: "small" | "medium" | "large";
}

export const Button = component$((props: ButtonProps) => {

  return <Box as="button" {...props} class={[buttonCss({ color: props.color, size: props.size }), props.class].join(' ')}><Slot /></Box>;
});
