import { component$, JSXChildren, Slot } from "@builder.io/qwik";
import { buttonCss, ButtonRecipeProps } from "~/ui/components/button/button.css";
import { Box, BoxProps } from "~/ui/components";

export interface ButtonProps extends ButtonRecipeProps, BoxProps {
  class?: string;
  children?: JSXChildren;
  onClick$?: () => void;
  color?: 'primary' | 'secondary';
  size?: "small" | "medium" | "large";
}

export const Button = component$((props: ButtonProps) => {

  return <Box as="button" {...props} class={[buttonCss({ color: props.color, size: props.size }), props.class].join(' ')}><Slot /></Box>;
});
