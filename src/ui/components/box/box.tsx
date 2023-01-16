import { rainbowSprinkles, Sprinkles } from "~/ui/theme/rainbow-sprinkles.css";
import { component$, Slot } from "@builder.io/qwik";
import { Base } from "~/ui/components/base/base.css";

export type BoxProps = typeof rainbowSprinkles & Sprinkles & any;

export const Box = component$((props: BoxProps) => {
  const { className, style, otherProps } = rainbowSprinkles(props);
  const BoxElement = props.as || 'div';
  return (
    <BoxElement class={[Base, className, props.class].join(' ')} style={style} {...otherProps}>
      <Slot />
    </BoxElement>
  );
});
