import { component$, Slot } from "@builder.io/qwik";
import { overlayCss } from "~/ui/components/overlay/index.css";

export interface Overlay {
  ref?: Element;
}

export const Overlay = component$((props: Overlay) => {
  /*useClientEffect$(async () => {
    const { body } = document;
    body.style.overflow = "hidden";
    return () => {
      body.style.overflow = "auto";
    };
  });*/
  // Need https://qwik.builder.io/tutorial/hooks/use-un-mount/ to remove hidden onUnMount
  return <section class={overlayCss} ref={props.ref}><Slot /></section>;
});
