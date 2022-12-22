import { component$, Slot } from "@builder.io/qwik";
import { DefaultLayout } from "~/ui/layouts/default";

export const Header = component$(() => {
  return (
      <div>Header</div>
  );
});

export const SideBar = component$(() => {
  return (
    <div>Side</div>
  );
});

export default component$(() => (
  <DefaultLayout headerComponent={Header} sidebarComponent={SideBar}>
    <Slot />
  </DefaultLayout>
));
