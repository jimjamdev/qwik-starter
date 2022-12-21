import { component$, Slot } from "@builder.io/qwik";
import { buttonCss } from "~/ui/components/button/button.css";

export const Button = component$(() => {
  return <button class={buttonCss}><Slot /></button>;
});
