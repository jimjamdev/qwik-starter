import { $, component$, Slot, useOnDocument, useSignal } from "@builder.io/qwik";

export const Animate = component$(() => {
  const el = useSignal<Element>();
  useOnDocument("load", $(() => {
    return console.log("load", el.value);
  }));
  return <span ref={el}><Slot /></span>;
});
