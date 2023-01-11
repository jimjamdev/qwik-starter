import { component$, Slot, useClientEffect$ } from "@builder.io/qwik";
import { overlayCss } from "~/ui/components/overlay/index.css";

export const Overlay = component$(() => {
  useClientEffect$(async () => {
    const { body } = document;
    body.style.overflow = "hidden";
    return () => {
      body.style.overflow = "auto";
    };
  });
  return <section class={overlayCss}><Slot /></section>;
});
