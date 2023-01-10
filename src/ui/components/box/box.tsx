import { rainbowSprinkles, Sprinkles } from "~/ui/theme/rainbow-sprinkles.css";
import { component$, Slot } from "@builder.io/qwik";

export interface BoxProps extends Sprinkles {
  class?: string;
  as?: any;
  ref?: any;
  onClick$?: () => void;
}

export const Box = component$((props: BoxProps) => {
  const { className, style, otherProps } = rainbowSprinkles(props);
  const Component = props.as || 'div';
  return (
    <Component class={className} style={style} {...otherProps}>
      <Slot />
    </Component>
  );
});
