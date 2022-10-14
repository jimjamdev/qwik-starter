import { component$, Slot } from '@builder.io/qwik';

export default component$(() => (
  <section><h1>Test inner slot</h1><Slot /></section>
));
