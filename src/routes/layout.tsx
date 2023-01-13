import { component$, Slot } from "@builder.io/qwik";
import { useTheme } from "~/ui/providers";

export default component$(() => {
  const theme = useTheme();
  return (
    <div style={{ display: 'contents' }} class={theme.theme}>
      <Slot />
    </div>
  );
});
