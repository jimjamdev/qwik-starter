import { component$ } from "@builder.io/qwik";
import { IPortal, usePortal } from "~/ui/providers/portal";
import { Overlay } from "~/ui/components/overlay";
import { Box } from "~/ui/components/box";
import { Portal } from "~/ui/components/portal";

export interface ILoginPortal extends IPortal {}

export const LoginPortal = component$((props: ILoginPortal) => {
  const portal = usePortal();
  return (
    <Portal>
      <Overlay>
        <Box
          bg="white"
          minWidth={{ mobile: "98%", tablet: "50%" }}
          minHeight={{ mobile: "99%", tablet: "auto" }}
        >
          <h1>{props.portalKey}</h1>
          <p>blah</p>
          <button onClick$={() => portal.closePortal(props.portalKey as any)}>
            Close
          </button>
        </Box>
      </Overlay>
    </Portal>
  );
});
