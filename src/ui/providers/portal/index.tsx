import {
  component$,
  useContextProvider,
  createContext,
  Slot,
  useContext,
  useStore,
  $
} from "@builder.io/qwik";

export interface IPortal {
  portalKey: string;
  props?: any;
}

export interface IPortalContext {
  portals: Array<IPortal>;
}

export const PortalContext = createContext("portal");

export const PortalProvider = component$(() => {

  const portalState = useStore<IPortalContext>({
    portals: [],
  });

  useContextProvider(PortalContext, portalState);
  return <Slot />;
});

export const usePortal = () => {
  const state = useContext(PortalContext) as IPortalContext;
  return {
    portals: state.portals,
    openPortal: $((portalKey: string, props?: any) => {
      if(!state.portals.find(p => p.portalKey === portalKey)) {
        state.portals = [...state.portals, { portalKey, props: { portalKey, ...props } }];
      }
    }),
    closePortal: $((portalKey: string) => {
      state.portals = state.portals.filter((portal) => portal.portalKey !== portalKey);
    }),
    closeAllPortals: $(() => {
      state.portals = [];
    }),
  }
};

