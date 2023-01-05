import { rainbowSprinkles, Sprinkles } from "~/ui/theme/rainbow-sprinkles.css";
import { component$, Slot } from "@builder.io/qwik";

export const Box = component$((props: Sprinkles) => {
  const { className, style, otherProps } = rainbowSprinkles(props);

  return (
    <div className={className} style={style} {...otherProps}>
      <Slot />
    </div>
  );
});
