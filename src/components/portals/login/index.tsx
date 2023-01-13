import { component$, useClientEffect$, useSignal } from "@builder.io/qwik";
import { IPortal, usePortal } from "~/ui/providers/portal";
import { Overlay } from "~/ui/components/overlay";
import { Box } from "~/ui/components/box";
import { Portal } from "~/ui/components/portal";
import { animate } from "motion";

export interface ILoginPortal extends IPortal {}

export const LoginPortal = component$((props: ILoginPortal) => {
  const portal = usePortal();
  const ref = useSignal<Element>();
  useClientEffect$(async () => {
    console.log("***ref", ref.value?.firstElementChild?.getAttribute('q:key'));
    animate(
      `${ref.value?.firstElementChild?.className}`,
      { rotate: 10 },
      {
        duration: 300,
        easing: "ease-in-out",
        direction: "alternate",
      }
    );
  });
  return (
    <Portal>
      <Overlay ref={ref}>
          <Box
            bg="white"
            minWidth={{ mobile: "70%", tablet: "50%" }}
            minHeight={{ mobile: "71%", tablet: "auto" }}
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
