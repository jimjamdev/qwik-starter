import { component$, Slot } from "@builder.io/qwik";
import { DefaultLayout } from "~/ui/layouts/default";

export const Header = component$(() => {
  return (
      <h1>Header</h1>
  );
});

export const SideBar = component$(() => {
  return (
    <h1>Side</h1>
  );
});

export default component$(() => (
  <DefaultLayout headerComponent={Header} sidebarComponent={SideBar}>
    <Slot />
  </DefaultLayout>
));
