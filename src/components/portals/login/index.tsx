import { component$ } from "@builder.io/qwik";
import { IPortal, usePortal } from "~/ui/providers/portal";
import { Overlay } from "~/ui/components/overlay";

export interface ILoginPortal extends IPortal {}

export const LoginPortal = component$((props: ILoginPortal) => {
  const portal = usePortal();
  return (
    <Overlay>
      <aside>
        <button onClick$={() => portal.closePortal(props.portalKey)}>Close</button>
        some portal key: <pre>{JSON.stringify(props, null, 2)}</pre>
      </aside>
    </Overlay>
  );
});
