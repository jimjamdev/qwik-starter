import { component$ } from "@builder.io/qwik";
import { IPortal, usePortal } from "~/ui/providers/portal/index";
import { Box } from "~/ui/components/box";

export const PortalRenderer = component$((props: { portalsList: any }) => {
  const state = usePortal();
  const portalsList = props.portalsList;
  return (
    <>
      {/*<pre>{JSON.stringify(state, null, 2)}</pre>*/}
      {state?.portals?.map((portal: IPortal) => {
        // @ts-ignore
        const PortalComponent =  portalsList[portal?.portalKey] ? portalsList[portal?.portalKey] : () => <></>;
        return <Box bg="lightgray" key={portal.portalKey}><PortalComponent key={portal.portalKey} {...portal.props} /></Box>;
      })}
    </>
  );
});
