import { component$ } from "@builder.io/qwik";
import { IPortal, usePortal } from "~/ui/providers/portal";
import { Overlay } from "~/ui/components/overlay";
import { Box } from "~/ui/components/box";

export interface ILoginPortal extends IPortal {}

export const LoginPortal = component$((props: ILoginPortal) => {
  const portal = usePortal();
  return (
    <Overlay>
      <Box bg="white">
        <h1>{props.portalKey}</h1>
        <p>blah</p>
        <button onClick$={() => portal.closePortal(props.portalKey as any)}>Close</button>
      </Box>
    </Overlay>
  );
});
