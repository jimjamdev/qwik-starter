import { component$, Slot } from "@builder.io/qwik";
import { buttonCss } from "~/ui/components/button/button.css";
import { Box, BoxProps } from "~/ui/components";
import { RecipeVariants } from "@vanilla-extract/recipes";

export type ButtonProps = BoxProps & RecipeVariants<typeof buttonCss>;

export const Button = component$((props: ButtonProps) => {
  console.log('***props--', props);

  return <Box as="button" {...props} class={[buttonCss({ color: props.color, size: props.size }), props.class].join(' ')}><Slot /></Box>;
});
