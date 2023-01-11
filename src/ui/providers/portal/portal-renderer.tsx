import { component$ } from "@builder.io/qwik";
import { IPortal, usePortal } from "~/ui/providers/portal/index";
import { Box } from "~/ui/components/box";
import { portalsList } from "~/components/portals/portalsList";

export const PortalRenderer = component$(() => {
  const state = usePortal();
  return (
    <>
      {/*<pre>{JSON.stringify(state, null, 2)}</pre>*/}
      {state?.portals?.map((portal: IPortal) => {
        // @ts-ignore
        const PortalComponent =  portalsList[portal?.portalKey] ? portalsList[portal?.portalKey] : () => <></>;
        return <Box bg="lightgray"><PortalComponent key={portal.portalKey} {...portal.props} /></Box>;
      })}
    </>
  );
});
