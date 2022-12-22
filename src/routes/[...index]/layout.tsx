import { component$, Slot } from "@builder.io/qwik";
import { DefaultLayout } from "~/ui/layouts/default";

export default component$(() => (
  <DefaultLayout>
    <h1>Test inner slot - inner layout</h1>
    <Slot />
  </DefaultLayout>
));
