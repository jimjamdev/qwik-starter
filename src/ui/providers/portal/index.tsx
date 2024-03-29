import {
  component$,
  useContextProvider,
  createContext,
  Slot,
  useContext,
  useStore,
  $,
} from "@builder.io/qwik";
import { PortalsList } from "~/components/portals/portalsList";

export interface IPortal {
  portalKey: string;
  props?: any;
}

export interface IPortalContext {
  portals: Array<IPortal>;
  portalKeys: Array<string>;
}

export const PortalContext = createContext("portal");

export const PortalProvider = component$((props: { portalsList: any }) => {
  const portalKeys = Object.keys(props?.portalsList)?.map((key) => key);

  const portalState = useStore<IPortalContext>({
    portals: [],
    portalKeys,
  });

  useContextProvider(PortalContext, portalState);
  return <Slot />;
});

export const usePortal = () => {
  const state = useContext(PortalContext) as IPortalContext;
  return {
    portals: state.portals,
    portalKeys: state.portalKeys,
    openPortal: $((portalKey: PortalsList, props?: any) => {
      if (!state.portalKeys.includes(portalKey))
        return console.error(
          `${String.fromCodePoint(
            0x1f92a
          )}  Portal key ${portalKey} not found, make sure to add it to the portalsList imported into PortalProvider`
        );

      if (!state.portals.find((p) => p.portalKey === portalKey)) {
        state.portals = [
          ...state.portals,
          { portalKey, props: { portalKey, ...props } },
        ];
      }
    }),
    closePortal: $((portalKey: PortalsList) => {
      if (!state.portalKeys.includes(portalKey))
        return console.error(
          `${String.fromCodePoint(
            0x1f92a
          )}  Portal key ${portalKey} not found, make sure to add it to the portalsList imported into PortalProvider`
        );

      state.portals = [
        ...state.portals.filter((portal) => portal.portalKey !== portalKey),
      ];
    }),
    closeAllPortals: $(() => {
      state.portals = [];
    }),
  };
};
