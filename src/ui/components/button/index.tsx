import { component$, Slot } from "@builder.io/qwik";
import { buttonCss } from "~/ui/components/button/button.css";
import { Box, BoxProps } from "~/ui/components";
import { RecipeVariants } from "@vanilla-extract/recipes";

type ButtonProps = BoxProps & RecipeVariants<typeof buttonCss>;

export const Button = component$((props: ButtonProps) => {

  return <Box as="button" {...props} class={[buttonCss({ color: props.color, size: props.size }), props.class].join(' ')}><Slot /></Box>;
});
