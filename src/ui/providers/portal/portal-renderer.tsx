import { component$ } from "@builder.io/qwik";
import { IPortal, usePortal } from "~/ui/providers/portal/index";
import { Box } from "~/ui/components/box";

export const PortalRenderer = component$(() => {
  const { value: portals } = usePortal();
  const { activePortals = {} } = portals;
  return (
    <Box>
      {activePortals?.map((portal: IPortal) => {
        return <portal {...portal} />;
      })}
    </Box>
  );
});
