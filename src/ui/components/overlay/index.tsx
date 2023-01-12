import { component$, Slot } from "@builder.io/qwik";
import { overlayCss } from "~/ui/components/overlay/index.css";

export const Overlay = component$(() => {
  /*useClientEffect$(async () => {
    const { body } = document;
    body.style.overflow = "hidden";
    return () => {
      body.style.overflow = "auto";
    };
  });*/
  // Need https://qwik.builder.io/tutorial/hooks/use-un-mount/ to remove hidden onUnMount
  return <section class={overlayCss}><Slot /></section>;
});
