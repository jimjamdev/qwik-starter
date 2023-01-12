
import { component$, Slot, useClientEffect$, useSignal } from "@builder.io/qwik";

export const Portal = component$(() => {
  const ref = useSignal<any>();

  useClientEffect$(async () => {
    const mountNode = ref.value;
    if (!mountNode) {
      ref.value = document.createElement("div");
    }

    document.body.appendChild(mountNode);

    return () => {
      document.body.removeChild(mountNode);
    };
  });

  return (
    <div class="portal" ref={ref}>
      <Slot />
    </div>
  );
});
