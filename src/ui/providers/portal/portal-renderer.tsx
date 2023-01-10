import { component$ } from "@builder.io/qwik";
import { usePortal } from "~/ui/providers/portal/index";
// import { Box } from "~/ui/components/box";

export const PortalRenderer = component$(() => {
  const { value, openPortal } = usePortal();
  console.log("***portals", value, openPortal);
  return <div>PORTALS: {JSON.stringify(value, null, 2)}</div>
  /*const { activePortals = [] } = portals;
  return (
    <Box>
      {activePortals?.map((portal: IPortal) => {
        return <portal {...portal} />;
      })}
    </Box>
  );*/
});
