import { component$ } from "@builder.io/qwik";
import { IPortal, usePortal } from "~/ui/providers/portal/index";
import { Box } from "~/ui/components/box";
import { portals } from "~/components/portals/portalsList";

export const PortalRenderer = component$(() => {
  const portalState = usePortal();
  return (
    <Box>
      <pre>{JSON.stringify(portalState.portals, null, 2)}</pre>
      {portalState?.portals?.map((portal: IPortal) => {
        // @ts-ignore
        const PortalComponent = portals[portal?.portalKey] ? portals[portal?.portalKey] : () => <></>;
        return <PortalComponent key={portal.portalKey} {...portal.props} />;
      })}
    </Box>
  );
});
