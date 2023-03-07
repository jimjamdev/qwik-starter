import {
  component$,
  Slot,
  useTask$,
  useSignal,
} from "@builder.io/qwik";

export interface IPortal {
  container?: HTMLElement;
}

export const Portal = component$((props: IPortal) => {
  const ref = useSignal<any>();
  const container = props.container || document.body;

  useTask$(async () => {
    const mountNode = ref.value;
    if (!mountNode) {
      ref.value = document.createElement("div");
    }

    container.appendChild(mountNode);

    return () => {
      container.removeChild(mountNode);
    };
  });

  return (
    <div ref={ref}>
      <Slot />
    </div>
  );
});
