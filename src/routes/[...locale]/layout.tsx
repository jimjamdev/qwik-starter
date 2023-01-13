import { component$, Slot } from "@builder.io/qwik";
import { DefaultLayout } from "~/ui/layouts/default";
import Header from "~/components/header/header";


export const SideBar = component$(() => {
  return <div>Side</div>;
});

export const Footer = component$(() => {
  return <div>footer</div>;
});

export default component$(() => (
  <DefaultLayout
    headerComponent={Header}
    sidebarComponent={SideBar}
    footerComponent={Footer}
  >
    <Slot />
  </DefaultLayout>
));
