import { component$, Slot } from "@builder.io/qwik";

export const Button = component$(() => {
  return <button><Slot /></button>;
});
