import { component$ } from "@builder.io/qwik";
import { usePortal } from "~/ui/providers/portal/index";
import { Box } from "~/ui/components/box";

export const PortalRenderer = component$(() => {
  const { value: portals } = usePortal();
  return (
    <Box>
      {portals?.map((portal) => {
        return <portal {...portal} />;
      })}
    </Box>
  );
});
