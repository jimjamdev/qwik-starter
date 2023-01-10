import { component$ } from "@builder.io/qwik";
import { IPortal } from "~/ui/providers/portal";

export interface ILoginPortal extends IPortal {}

export const LoginPortal = component$((props: ILoginPortal) => {
  return <aside>some portal key: {props?.portalKey}</aside>
});
