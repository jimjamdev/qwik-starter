import { useContext } from "@builder.io/qwik";
import { PortalContext } from "~/ui/providers/portal";

export const usePortal = () => {
  const portal = useContext(PortalContext);
  return {
    ...portal,
  }
};
